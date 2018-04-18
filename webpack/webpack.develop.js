const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseConfig = require('./webpack.baseConfig.js');
const devServer = require('./webpack.devserver.js');

const develop = merge(baseConfig, devServer, {
  mode: 'development',
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './app/template.html',
    //   chunks: ['vendors', 'app']
    // }),
    new webpack.SourceMapDevToolPlugin({
      "filename": "[file].map[query]",
      "moduleFilenameTemplate": "[resource-path]",
      "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
      "sourceRoot": "webpack:///"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
          'ENV': JSON.stringify(ENV)
      }
  }),
  // new BundleAnalyzerPlugin({
  //   analyzerMode: 'static'
  // })
  ],
});

module.exports = develop;