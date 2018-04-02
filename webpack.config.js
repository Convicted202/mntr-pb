const env = process.env.NODE_ENV || 'develop';

const config = require(`./webpack/${env}.js`);

module.exports = config;
