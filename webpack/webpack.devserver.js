const path = require('path');

const devServer =  {
  devServer: {
    contentBase: path.resolve(__dirname, '../app/dist'),
    publicPath: '/'
  }
}

module.exports = devServer;