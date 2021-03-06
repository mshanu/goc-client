var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')

  },

  node: {
    fs: 'empty'
  },
  plugins: [new HtmlWebpackPlugin()]

};
