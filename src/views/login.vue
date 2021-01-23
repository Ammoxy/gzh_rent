<template>
  <div class="home"></div>
</template>

<script>
import API from "../api/index";

export default {
  data() {
    return {
      code: "",
      state: "",
      name: "出租屋安全系统",
    };
  },
  created() {
    this.$toast.loading("登录中...");
    console.log(window.location);
    this.code = API.getUrlParam("code"); //获取url参数
    this.state = API.getUrlParam("state"); //获取url参数

    console.log("code ==>" + this.code);
    console.log(11, "state=" + this.state);
    API.gainToken(self.name).then((res) => {
      console.log(res);
    });
    if (this.code) {
      // 用code获取openId
      this.GetOpenId(this.code);
    } else {
      // 获取code
      API.wxLogin(this.state); //微信登录接口（获取code）
    }
  },
  methods: {
    //获取OpenId
    GetOpenId: function (code) {
      console.log("获取OpenId  GetOpenId");
      let self = this;
      console.log("123", self.code);
      API.gainOpenId(self.code, self.name).then((res) => {
        console.log("GetOpenId ==>", res);
        sessionStorage.setItem("openId", res);
        if (self.state === "auth") {
          console.log(123456, self.state);
          self.$router.push(
            "/auth" +
              "?" +
              "open_id" +
              "=" +
              sessionStorage.getItem("openId")
          );
        } else {
          console.log(123444);
          self.$router.push("/" + self.state);
        }
      });
    },
  },
};
</script>
