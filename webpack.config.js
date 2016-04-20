const Path = require('path');

module.exports = {
  entry: Path.join(__dirname, 'src/ui-main'),
  output: {
    path: __dirname,
    filename: 'public/bundled/ui-main.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react'],
          plugins: [
          ]
        }
      }
    ]
  },
};
