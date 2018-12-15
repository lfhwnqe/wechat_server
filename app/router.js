'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index)
  router.post('/userInfo', controller.user.getUserInfo)
  router.get('/getCode', controller.scan.getCode)
  router.post('/wxLogin',controller.user.wxLogin)
};