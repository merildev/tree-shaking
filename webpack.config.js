const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.NODE_ENV = 'production'

module.exports = {
  "mode": "production",
  "entry": "./src/index.js",
  "output": {
    "path": __dirname+'/static',
    "filename": "[name].[chunkhash:8].js"
  },
  "module": {
    "rules": [
      {
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        include: /src/,
        test: /\.js$/,
        use: [
          {
            loader: `babel-loader?cacheDirectory=${false}`,
          }
        ],
      }
    ]
  },
  optimization: {
    concatenateModules: false
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: './report.html'
    })
  ]
}
