const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const filenamePrefix = '[hash:8]/'

module.exports = {
  entry: {
    vendor: [ 'react', 'react-dom' ],
    home: path.resolve(__dirname, 'web/home.js')
  },

  output: {
    filename: `${filenamePrefix}[name].js`,
    path: path.resolve(__dirname, 'web/public/assets'),
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ]
  },

  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: `${filenamePrefix}vendor.js`
    }),
    new ExtractTextPlugin(`${filenamePrefix}styles.css`),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],

  postcss: () => [ autoprefixer ]
}
