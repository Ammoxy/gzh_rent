import axios from '@/plugins/axios'
import url from './url.js'

var API = {};
const appId = "wxebbf02df4a2bedff"; //公众号ID
const realmB = "https://shou.fengniaotuangou.cn"; //公众号页面地址

//封装微信登录接口（获取code）
API.wxLogin = function (value) {
    console.log(realmB);
    // let redirect_uri = encodeURIComponent(url)
    console.log('封装微信登录接口')
    window.location.href =
        `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${realmB}&response_type=code&scope=snsapi_base&state=${value}#wechat_redirect`

}
// 获取token
API.gainToken = function (name) {
    return axios.get(url.Token, {
        name: name
    })
}

// 获取openId
API.gainOpenId = function (code, name) {
    return axios.get(url.OpenId, {
        code: code,
        name: name
    })
}

// 授权
API.auth = function (user_openid, name) {
    return axios.post(url.Auth, {
        user_openid: user_openid,
        name: name
    })
}

API.getUrlParam = function (key) {
    // 第一种
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]);
    return null; //返回参数值　
}

export default API