var Twitter = require('twitter');
var fs = require('fs');
var _ = require('lodash');
var Typo = require('typo-js');
var sqlite3 = require('sqlite3');
var io = require('socket.io')();

var db = new sqlite3.Database('tweets.db');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile('../index.html');
});

process.argv.forEach(function (val) {
  if (val == 'createdb') {
    db.serialize(function() {
      db.run(`
        CREATE TABLE tweets (
          id INTEGER PRIMARY KEY,
          tweet VARCHAR(140),
          time LONG,
          typos INTEGER
        );
      `);
    })
  }
});


db.each("SELECT tweet FROM tweets", function(err, row) {
  var typos  = [];
  row.tweet.split(' ').forEach(function (word) {
    if (!dictionary.check(word)) {
      typos.push(word);
    }
  });
  console.log(row.tweet, typos, '\n');
});

var dictionary = new Typo('en_US');

const fetchTweets = false;

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

  var stream = client.stream('statuses/filter', {track: 'a'});

  io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });

  io.on('connection', function() {
    stream.on('data', function(tweet) {
      if (tweet.lang === 'en' && !tweet.retweeted_status && !tweet.entities.urls) {
        console.log(tweet);

        db.run("INSERT INTO tweets (id, tweet, typos, time) VALUES (?, ?, ?, ?)", [
          tweet.id,
          tweet.text,
          5,
          Date.now()
        ]);

        socket.emit('tweet', tweet);
      }
    });
  });

  stream.on('error', function(error) {
    throw error;
    db.close();
  });
}
