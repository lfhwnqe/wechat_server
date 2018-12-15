'use strict';
const appConfig = require('../wechat_config')
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539137177057_4769';

  // 小程序appid和appSecret
  config.appSecret = appConfig.appSecret
  config.appID = appConfig.appID
  // add your config here
  config.middleware = [];

  config.security = { // 开发环境关闭
    csrf: {
      enable: false
    }
  }

  return config;
};