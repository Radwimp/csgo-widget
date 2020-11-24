"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _path = require("path");

var _webpack = require("webpack");

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

var _copyWebpackPlugin = _interopRequireDefault(require("copy-webpack-plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sourcePath = (0, _path.join)(process.cwd(), 'src');
var outputPath = (0, _path.join)(process.cwd(), 'build');
var entryPath = (0, _path.join)(sourcePath, 'index.jsx');
var assetsPath = (0, _path.join)(sourcePath, 'assets');
var templatePath = (0, _path.join)(sourcePath, 'template.html');

var _default = function _default(env, options) {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: ['react-hot-loader/patch', entryPath],
    output: {
      filename: '[name].[hash].js',
      publicPath: '/',
      path: outputPath
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', 'src'],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      }, {
        test: /\.(eot|otf|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'file-loader?limit=10000'
      }]
    },
    plugins: [new _webpack.DefinePlugin({
      __DEV__: options.mode !== 'production'
    }), new _htmlWebpackPlugin["default"]({
      template: templatePath
    }), new _copyWebpackPlugin["default"]([{
      from: assetsPath,
      to: outputPath
    }])],
    devServer: {
      hot: true,
      host: process.env.HOST || '127.0.0.1',
      port: process.env.PORT || 8080,
      contentBase: assetsPath,
      historyApiFallback: true
    }
  };
};

exports["default"] = _default;