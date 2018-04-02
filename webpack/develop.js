const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
  entry: './app/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../app'),
    publicPath: '/dist/'
  }
}

module.exports = baseConfig;