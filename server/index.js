var Twitter = require('twitter');
var fs = require('fs');
var _ = require('lodash');
var Typo = require('typo-js');
var sqlite3 = require('sqlite3');
var io = require('socket.io')();

var db = new sqlite3.Database('tweets.db');

var express = require('express')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var spellchecker = require('spellchecker');

server.listen(8080);

app.use(express.static('public'));

process.argv.forEach(function (val) {
  if (val == 'createdb') {
    db.serialize(function() {
      db.run(`
        CREATE TABLE tweets (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          typos INTEGER,
          time LONG
        );
      `);
    })
  }
});

function getTypoCount(tweet) {
  var typos = [];
  tweet.split(' ').forEach(function(word) {

    if (/^[a-zA-Z]+$/.test(word) && !dictionary.check(word)) {
      typos.push(word);
    }
  });
  console.log(typos);
  return typos;
}

var dictionary = new Typo('en_US');

const fetchTweets = true;

  var buffer = [];

if (fetchTweets) {
  const isTweet = _.conforms({
    contributors: _.isObject,
    id_str: _.isString,
    text: _.isString,
  });

  var client = new Twitter({
    consumer_key: 'oYRsK4FAsDO2PKGLz0k5FWrst',
    consumer_secret: 'nd5XiqHsZoiVFdDOzcwup20N3e76wEi8vmDDNSQiAi9maXS5bd',
    access_token_key: '887801041-MGADZLyerYiulwsobh9tJJgGHQtue7DMOGMmMbWm',
    access_token_secret: 'TlVxmebjYpnGNGDpeYlczWoNDmWmMiK7K9VNzE98UJ5or'
  });

  var stream = client.stream('statuses/filter', {track: 'and'});


  stream.on('data', function(tweet) {
    if (tweet.lang === 'en' && !tweet.retweeted_status && tweet.entities.urls.length === 0) {
      var typos = getTypoCount(tweet.text);
      buffer.push(Object.assign(tweet, {typos: typos.length}));
      db.run("INSERT INTO tweets (typos, time) VALUES (?, ?)", [
        typos.length,
        Date.now()
      ]);
    }
  });
}

var connections = [];
io.on('connection', function (socket) {
  connections.push(socket);
});

setInterval(function() {
  var end = Date.now();
  var start = end - 5000;
  var tps = 0;
  db.each("SELECT * FROM tweets WHERE time > ? AND time < ?", [start, end], function(err, row) {
    tps += row.typos;
  }, function () {
    tps /= 5;
    connections.forEach(function(socket) {
      socket.emit('tps', {tps: tps});
    });
  });

  connections.forEach(function(socket) {
    socket.emit('tweets', buffer);
  });
  buffer = [];
}, 3000);

stream.on('error', function(error) {
  throw error;
  db.close();
});
