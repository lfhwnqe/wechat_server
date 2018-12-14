'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        // const data = this.ctx.request.body
        this.ctx.body = {
            msg:'hello world'
        }
    }
}

module.exports = UserController;