'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      msg: 'hello world'
    };
  }
}

module.exports = HomeController;