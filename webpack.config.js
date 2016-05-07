var webpack = require('webpack');

module.exports = {
  entry: {
    'index': './src/index.js',
    'chat': './src/chat.js'
  },
  output: {
    path: 'assets/build',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      // { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel!jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel'},
    ]
  }
};
