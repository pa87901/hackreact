var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
    path: '/build',
    filename: '/index.js',
    publicPath: '/build/'
  },
  devtool: "inline-source-map",
  devserver: {
    contentBase: path.join(__dirname, "build"),
    filename: 'index.js',
    compress: true,
    watchContentBase: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
