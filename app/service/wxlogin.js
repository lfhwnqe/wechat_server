const Service = require('egg').Service;

class WxloginService extends Service {
    // 获取openid
    async userInfo(data) {
        const {
            appSecret,
            appID,
            code
        } = data
        // 根据用户的code等解析处用户的openId
        const code2session = `https://api.weixin.qq.com/sns/jscode2session?appid=${appID}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code
         `
        let userInfoResult = await this.ctx.curl(code2session, {
            // 自动解析 JSON response
            dataType: 'json',
            // 3 秒超时
            timeout: 3000,
        })
        if (userInfoResult.data) {
            return userInfoResult.data
        } else {
            logger.error('error in userInfo code2session:', userInfoResult)
            return false
        }
    }
}


module.exports = WxloginService;