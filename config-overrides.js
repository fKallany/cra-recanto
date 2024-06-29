const { paths } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {

  config.resolve.alias = {
    ...config.resolve.alias,
    '/components': paths.appSrc + '/components',
    '/pages': paths.appSrc + '/pages',
    '/styles': paths.appSrc + '/styles',
    '/assets': paths.appSrc + '/assets',
  };
  return config;
}