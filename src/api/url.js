const BaseURL = "https://chu.fengniaotuangou.cn/api"

const url = {
    'Token': BaseURL + '/access/token', // 获取token
    'OpenId': BaseURL + '/mandate/school', // 获取openId
    'Auth': BaseURL + '/insert_user', // 授权
}

module.exports = url;