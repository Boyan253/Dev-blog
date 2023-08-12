const path = require('path');

module.exports = {
  entry: './src/assets/js/contentful.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist') // Output directory
  }
};
