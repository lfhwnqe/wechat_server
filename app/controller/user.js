'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserInfo() {
        const data = this.ctx.request.body
        console.log(data)
        this.ctx.body = {
            code: 0,
            msg: 'hello world'
        }
    }

    async wxLogin() {
        const appSecret = this.config.appSecret
        const appID = this.config.appID
        const code = this.ctx.request.body.code
        const WxloginService = this.service.wxlogin
        const userInfoResult = await WxloginService.userInfo({
            appSecret,
            appID,
            code
        })
        if (!userInfoResult) {
            this.ctx.body = {
                code: -1,
                msg: 'error'
            }
            return
        } else {
            this.ctx.body = {
                code: 0,
                data: userInfoResult
            }
        }
    }
}

module.exports = UserController;