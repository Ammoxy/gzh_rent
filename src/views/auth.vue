<template>
  <div>
    <div class="btn">
      <el-button type="success" @click="authorization">授权通知</el-button>
      <p style="margin-bottom: 20vw;font-size: 4vw;">点击领取获得推送资格</p>
      <p>关注公众号方可接收服务到期推送消息</p>
      <img src="../assets/images/qrcode.jpg" alt />
    </div>
  </div>
</template>

<script>
import API from "../api/index";

export default {
  data() {
    return {
      user_openid: "",
      name: "出租屋安全系统",
    };
  },
  methods: {
    authorization() {
      var self = this;
      console.log(321, sessionStorage.getItem("openId"));
      self.user_openid = sessionStorage.getItem("openId");

      API.auth(self.user_openid, self.name).then((res) => {
        console.log(res);
        self.$toast.success("授权成功");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.btn {
  text-align: center;
  padding: 40vw 0;
}

.btn img {
  width: 30vw;
  height: 30vw;
}
</style>