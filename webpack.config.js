const path = require('path');

module.exports = {
  entry: './build/public/app.js',
  mode: 'production',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/public/'),
  },
};
