import path from 'path';

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules'/, use: { loader: 'babel-loader'} },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ]
  }
};
