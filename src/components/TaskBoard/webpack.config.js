const path = require('path');

module.exports = {
  entry: './src/index.js', // your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      },
      // other loaders like babel, css loaders can be added here
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
