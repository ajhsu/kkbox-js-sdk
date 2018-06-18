const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  // module: {
  //   rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  // },
  output: {
    library: 'KKBOX',
    libraryTarget: 'var',
    path: path.resolve(__dirname, 'dist'),
    filename: 'kkbox.js'
  }
};
