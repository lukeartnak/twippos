var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'src'),
      loaders: ['react-hot', 'babel']
    },
    {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
