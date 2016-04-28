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
      { test: /\.(jsx|js)$/, loader: 'eslint', include: [path.resolve(__dirname, 'src')] }
    ],
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader?modules&importLoaders=1&sourceMap&localIdentName=[hash:base64:6]"},
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [path.resolve(__dirname, 'src')],
        test: /\.js$/,
        plugins: ['transform-runtime'],
        exclude:/node_modules/
      },
      { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loaders: ['react-hot', 'babel-loader']},

      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};