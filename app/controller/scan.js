'use strict';
const fs = require('fs')

const APPID = ''
const SECRET = ''

const Controller = require('egg').Controller;

class ScanController extends Controller {
    async getCode() {
        const ctx = this.ctx
        const {
            scene
        } = ctx.request.query
        if (!scene) {
            ctx.body = {
                code: -1,
                msg: 'no scene'
            }
        } else {
            const result = await ctx.curl(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${SECRET}`, {
                method: "GET",
                dataType: 'json'
            })
            // ctx.status = result.status;
            // ctx.set(result.headers);
            const {
                access_token
            } = result.data

            const imgData = await ctx.curl(`https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`, {
                method: "POST",
                contentType: 'json',
                data: {
                    scene,
                    page: 'pages/scan/index'
                },
                // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
                // dataType: 'json',
            })
            // this.ctx.type = 'jpg'
            // this.ctx.body = imgData

            await fs.writeFile(__dirname+'/../public/img.jepg', imgData.data, err => {
                if (err) throw new Error(err)
                console.log('文件已保存')
            })
            
            // ctx.redirect('/public/img.jepg')
            ctx.redirect('/public/icon.html')

            // ctx.status = imgData.status;
            // ctx.set(imgData.headers);
            // ctx.body = imgData.data
        }
    }
}

module.exports = ScanController;