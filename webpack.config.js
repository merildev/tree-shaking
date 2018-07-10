const { resolve } = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(process.cwd(), 'dist'),
    publicPath: 'assets/',
  },
  resolve: {
    extensions: ['.js']
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /[/\\\\]node_modules[/\\\\]/,
      },
      {
        include: /[/\\\\]blockchain-info-components[/\\\\]/,
        test: /\.(eot|ttf|otf|woff|woff2|svg)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    process.env.ANALYZE
      ? new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: './report.html'
      })
      : null
  ].filter(Boolean)
}
