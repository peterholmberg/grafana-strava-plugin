const baseWebpackConfig = require('./webpack.config');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const conf = baseWebpackConfig
conf.mode = 'production';

conf.plugins.push(new ngAnnotatePlugin());
conf.plugins.push(
  new UglifyJSPlugin({
  sourceMap: true,
  })
);

module.exports = conf;
