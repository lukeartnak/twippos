var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname+'/public',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
