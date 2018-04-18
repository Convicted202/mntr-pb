const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const baseConfig = require('./webpack.baseConfig.js');
const devServer = require('./webpack.devserver.js');

const production = merge(baseConfig, {
  mode: 'production',
  plugins: [
  new ExtractTextPlugin("[name].css"),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require("cssnano"),
    cssProcessorOptions: { discardComments: { removeAll: true } }
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
        screw_ie8: true,
        warnings: false
    },
    mangle: {
        keep_fnames: true,
        screw_i8: true
    }
  }),
  new CompressionPlugin({
    algorithm: "gzip"
  }),
  new BrotliPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
        'ENV': JSON.stringify(ENV)
    }
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  })
  ],
});

module.exports = production;