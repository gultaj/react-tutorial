var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [path.resolve(__dirname, 'src')]
      }
    ],
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [path.resolve(__dirname, 'src')],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loaders: ['react-hot', 'babel-loader']},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};