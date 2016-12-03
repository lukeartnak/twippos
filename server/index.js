var Twitter = require('twitter');
var fs = require('fs');
var _ = require('lodash');

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
stream.on('data', function(event) {
  console.log(event && event.text + "\n\n");
  fs.appendFile('tweets.txt', event && event.text + "\n\n", function (err) {

  });
});

stream.on('error', function(error) {
  throw error;
});
