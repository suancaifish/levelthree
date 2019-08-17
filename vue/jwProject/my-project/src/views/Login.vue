<template>
  <div>
    <div class="login-tit" v-text="title"></div>

    <div class="login-banner"></div>

    <van-cell-group class="phone-cont">
      <van-field v-model="zhanghao" placeholder="请输入账号" left-icon="user-o" />
      <van-field v-model="passWord" center clearable placeholder="请输入密码" left-icon="comment-o">
        <!-- <van-button slot="button" size="small" type="default">获取验证码</van-button> -->
      </van-field>
    </van-cell-group>
    <div class="login-btn">
      <van-button type="primary" size="large" @click="click()" :text="loginText"></van-button>
    </div>

    <!-- 底部 -->
    <div class="link-box" @click="regBtn" v-text="linktit"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
import Router from 'vue-router'

Vue.use(Toast);
export default {
  data() {
    return {
      passWord: "",
      zhanghao: "",
      title: "登录分期乐",
      linktit: "没有账号？极速注册",
      loginText: "登录"
    };
  },
  watch: {
    $route(to, from) {
      // from 对象中要 router 来源信息.
      // console.log(1123);
      // do your want
    }
  },
  methods: {
    async click() {
      // console.log(1);
      let pw = this.$md5(this.passWord);
      let zh = this.zhanghao;

      // console.log(zh);
      if (this.loginText == "注册") {
        //注册请求
        // console.log(1);
        let zhuce = await this.$axios(
          `http://hn216.api.yesapi.cn/?service=App.User.Register&username=${zh}&password=${pw}&app_key=C1DCA54ECCCB41D44EA1C33954631C24&sign=3B16470FFFFAEC2CDE9150E32ACD9258`
        );
        // console.log(zhuce.data.data);
        if (zhuce.data.data.err_code == 0) {
          Toast("注册成功，请登录");
        }
      } else {
        //登录接口
        let denglu = await this.$axios(
          `http://hn216.api.yesapi.cn/?service=App.User.Login&username=${zh}&password=${pw}&is_allow_many=1&app_key=C1DCA54ECCCB41D44EA1C33954631C24&sign=2A13868EA3F22EAC0120F70B64DE119D`
        );
        // console.log(denglu.data.data);
        if (denglu.data.data.err_code == 0) {
          await Toast("登录成功");
          this.$store.state.loginState = `欢迎 ${zh}`;
          this.$router.go(-1);
        }
      }
    },
    regBtn() {
      if (this.title == "注册分期乐账号") {
        this.title = "登录分期乐";
        this.linktit = "没有账号？极速注册";
        this.loginText = "登录";
      } else {
        this.title = "注册分期乐账号";
        this.linktit = "已有账号？立即登录";
        this.loginText = "注册";
      }
      // console.log(999);
    }
  },
  async mounted() {
    // console.log();
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
  background-color: rgb(59, 155, 255);
  border-color: rgb(59, 155, 255);
  color: #fff;
}
.login-btn {
  padding: 0 18px;
}
</style>

