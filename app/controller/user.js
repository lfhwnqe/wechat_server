'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        const data = this.ctx.request.body
        console.log('data is back==>>', data)
        this.ctx.body = {
            data
        }
    }
}

module.exports = UserController;