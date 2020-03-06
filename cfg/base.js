'use strict';
let path = require('path');
let defaultSettings = require('./defaults');
const srcPath = path.join(__dirname, '/../src');
const vendorPath = path.join(__dirname, '/../vendor');
const dfltPort = 8000;

module.exports = {
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'widget.js',
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    publicPath: '/assets/',
    noInfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      sources: `${srcPath}/sources/`,
      stores: `${srcPath}/stores/`,
      styles: `${srcPath}/styles/`,
      utils: `${srcPath}/utils/`,
      config: `${srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      vendor: vendorPath,
      React: __dirname + '/../node_modules/react'
    }
  },
  module: {}
};
