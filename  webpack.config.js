
module.exports = {
    output: {
      path: require('path').resolve(`./dist/js`),
      filename: `script.js`,
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: `babel-loader`
        }
      ]
    }
  };
  