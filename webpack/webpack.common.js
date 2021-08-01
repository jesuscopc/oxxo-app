/* eslint-disable semi */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '..', './src/index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, '../', './public/favicon.ico'),
      title: 'Oxxo App',
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  }
};
