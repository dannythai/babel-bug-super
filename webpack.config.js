const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js", // bundle's entry point
  output: {
      path: path.resolve(__dirname, 'dist'), // output directory
      filename: "bundle.js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              // modules: false enables Tree Shaking to remove unused exports
              ['es2015', { modules: false }],
              'react',
              'stage-0'
            ],
            plugins: [
              'transform-class-properties',
              'transform-runtime',
              'transform-es2015-classes',
              'transform-optional-chaining'
            ]
          }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};