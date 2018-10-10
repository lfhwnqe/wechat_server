'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539137177057_4769';

  // add your config here
  config.middleware = [];

  config.security = { // 开发环境关闭
    csrf: {
      enable: false
    }
  }

  return config;
};
