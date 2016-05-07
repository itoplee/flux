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
    extensions: ['', '.js'],
  },
  module: {
    loaders:[
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel', query: {presets: ['react', 'es2015']}},
      { test: /\.less/, loader: 'style!css!autoprefixer!less' }
    ]
  }
};
