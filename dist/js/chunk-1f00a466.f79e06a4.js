(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f00a466"],{2768:function(t,e,n){"use strict";var o=n("c707"),s=n.n(o);s.a},"6ecd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"btn"},[o("el-button",{attrs:{type:"success"},on:{click:t.authorization}},[t._v("授权通知")]),o("p",{staticStyle:{"margin-bottom":"20vw","font-size":"4vw"}},[t._v("点击领取获得推送资格")]),o("p",[t._v("关注公众号方可接收服务到期推送消息")]),o("img",{attrs:{src:n("72b4"),alt:""}})],1)])},s=[],c=(n("b0c0"),n("365c")),i={data:function(){return{user_openid:"",name:"出租屋安全系统"}},created:function(){console.log(sessionStorage.getItem("openId"))},methods:{authorization:function(){var t=this;console.log(321,sessionStorage.getItem("openId")),t.user_openid=sessionStorage.getItem("openId"),c["a"].auth(t.user_openid,t.name).then((function(e){console.log(e),t.$toast.success("授权成功")}))}}},a=i,r=(n("2768"),n("2877")),u=Object(r["a"])(a,o,s,!1,null,"7472e1dc",null);e["default"]=u.exports},"72b4":function(t,e,n){t.exports=n.p+"img/qrcode.e1e8c778.jpg"},c707:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1f00a466.f79e06a4.js.map