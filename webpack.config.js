const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: process.env.PUBLIC_URL || '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            sourceMaps: true
          },
        },
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};