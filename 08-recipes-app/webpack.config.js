const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development', // 'production' if you want to minify your CSS
  entry: './src/css/styles.css',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // If you have JS files, otherwise adjust as needed
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your index.html
    }),
  ],
  devServer: {
    static: './src', // Serve files from this directory
    open: true, // Automatically open the browser
  },
};
