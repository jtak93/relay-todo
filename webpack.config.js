const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
import path from 'path';
import webpack from 'webpack';


const env = process.env.NODE_ENV || 'development'

const config = {
  entry: path.resolve(__dirname, 'js', 'app.js'),
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'js'),
    ]
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: 'app.js',
    path: '/',
    publicPath: '/js/'
  }
};

module.exports = config;
