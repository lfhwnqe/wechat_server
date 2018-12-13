'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.redirect('/public/index.html')
  }
}

module.exports = HomeController;