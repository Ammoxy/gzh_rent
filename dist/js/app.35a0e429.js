(function(e){function t(t){for(var o,r,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1f00a466":"f79e06a4"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1f00a466":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-1f00a466":"b2fd0585"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"365c":function(e,t,n){"use strict";n("99af"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("841c"),n("d3b7");var o=n("bc3a"),r=n.n(o),a=(n("5c96"),n("4328")),c={},u=r.a.create({timeout:3e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});u.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),u.interceptors.response.use((function(e){if(200===e.status)return e.data}),(function(e){return console.log(e),Promise.reject(e.response)})),c.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,o){u.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))},c.del=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,o){u.delete(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))},c.post=function(e,t){return new Promise((function(n,o){u.post(e,a.stringify(t)).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))},c.put=function(e,t){return new Promise((function(n,o){u.put(e,a.stringify(t)).then((function(e){n(e.data)})).catch((function(e){o(e)}))}))},c.getExcel=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,o){r.a.get(e,{params:t}).then((function(e){n(e)})).catch((function(e){o(e)}))}))};var i=c,s=n("99b1"),l=n.n(s),f={},d="wxebbf02df4a2bedff",p="https://shou.fengniaotuangou.cn";f.wxLogin=function(e){console.log(p),console.log("封装微信登录接口"),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(d,"&redirect_uri=").concat(p,"&response_type=code&scope=snsapi_base&state=").concat(e,"#wechat_redirect")},f.gainToken=function(e){return i.get(l.a.Token,{name:e})},f.gainOpenId=function(e,t){return i.get(l.a.OpenId,{code:e,name:t})},f.auth=function(e,t){return i.post(l.a.Auth,{user_openid:e,name:t})},f.getUrlParam=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?decodeURIComponent(n[2]):null};t["a"]=f},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("7c55"),n("2877")),u={},i=Object(c["a"])(u,r,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},d=[],p=(n("b0c0"),n("365c")),h={data:function(){return{code:"",state:"",name:"出租屋安全系统"}},created:function(){this.$toast.loading("登录中..."),console.log(window.location),this.code=p["a"].getUrlParam("code"),this.state=p["a"].getUrlParam("state"),console.log("code ==>"+this.code),console.log(11,"state="+this.state),p["a"].gainToken(self.name).then((function(e){console.log(e)})),this.code?this.GetOpenId(this.code):p["a"].wxLogin(this.state)},methods:{GetOpenId:function(e){console.log("获取OpenId  GetOpenId");var t=this;console.log("123",t.code),p["a"].gainOpenId(t.code,t.name).then((function(e){console.log("GetOpenId ==>",e),sessionStorage.setItem("openId",e),"auth"===t.state?(console.log(123456,t.state),t.$router.push("/auth?open_id="+sessionStorage.getItem("openId"))):(console.log(123444),t.$router.push("/"+t.state))}))}}},g=h,m=Object(c["a"])(g,f,d,!1,null,null,null),v=m.exports;o["default"].use(l["a"]);var b=[{path:"/",name:"login",component:v},{path:"/auth",name:"auth",component:function(){return n.e("chunk-1f00a466").then(n.bind(null,"6ecd"))}}],w=new l["a"]({mode:"history",routes:b}),y=w,O=n("2f62");o["default"].use(O["a"]);var P=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}}),_=n("bc3a"),k=n.n(_),x=n("a7fe"),j=n.n(x),I=n("5c96"),E=n.n(I),T=(n("0fae"),n("b970"));n("157a");o["default"].use(j.a,k.a),o["default"].use(E.a),o["default"].use(T["a"]),o["default"].config.productionTip=!1,new o["default"]({router:y,store:P,render:function(e){return e(s)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var o=n("2395"),r=n.n(o);r.a},"99b1":function(e,t){var n="https://chu.fengniaotuangou.cn/api",o={Token:n+"/access/token",OpenId:n+"/mandate/school",Auth:n+"/insert_user"};e.exports=o}});
//# sourceMappingURL=app.35a0e429.js.map