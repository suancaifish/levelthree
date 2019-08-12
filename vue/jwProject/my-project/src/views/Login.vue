<template>
  <div>
    <div class="login-tit" v-text="title"></div>

    <div class="login-banner"></div>

    <van-cell-group class="phone-cont">
      <van-field v-model="phone" placeholder="请输入手机号" left-icon="phone-o" />
      <van-field v-model="sms" center clearable placeholder="请输入短信验证码" left-icon="comment-o">
        <van-button slot="button" size="small" type="default">获取验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="primary" size="large">登录</van-button>
    </div>

    <!-- 底部 -->
    <div class="link-box" @click="regBtn" v-text="linktit"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sms: "",
      phone: "",
      title: "登录分期乐",
      linktit: "没有账号？极速注册"
    };
  },
  methods: {
    regBtn() {
      if (this.title == "注册分期乐账号") {
        this.title = "登录分期乐";
        this.linktit = "没有账号？极速注册";
      } else {
        this.title = "注册分期乐账号";
        this.linktit = "已有账号？立即登录";
      }

      
      console.log(999);
    }
  }
};
</script>


<style scoped>
.login-tit {
  text-align: center;
  height: 1.222222rem;
  background-color: rgb(59, 155, 255);
  color: #fff;
  font-size: 18px;
  line-height: 1.222222rem;
}
.login-banner {
  background: url(https://cres1.fenqile.cn/passport/online/img/68e05730d3e8de226f3fcf3da648dcc6.png)
    50% / auto 70px no-repeat #3b9bff;
  /* height: 170px; */
  height: 4.722222rem;
  margin-top: -1px;
}
.link-box {
  background-color: #fff;
  bottom: 0;
  color: #3b9bff;
  font-weight: 700;
  line-height: 56px;
  /* line-height: 1.555556rem;   */
  position: absolute;
  text-align: center;
  width: 100%;

  border-top: 1px solid #eaeaea;
}
.phone-cont {
  background-color: #fff;
  margin: 10px 0 20px;
  border-top: none;
}
.van-hairline--top-bottom::after {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
}
.van-button--large {
  /* width: 95%; */
  height: 44px;
  line-height: 44px;

  text-align: center;
}
.van-button--primary {
  background-color: #78baff;
  border-color: #78baff;
  color: #abd4ff;
}
.login-btn {
  padding: 0 18px;
}
</style>

