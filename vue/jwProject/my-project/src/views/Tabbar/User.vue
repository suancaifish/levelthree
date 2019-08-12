<template>
    <div class="bgcolor">
      <div class="tophead">
        <h1>
          <van-icon name="envelop-o" size="22px" class="toptit" color="#fff" />
          <p>设置</p>
        </h1>
      </div>

      <div class="account-top-con topFixed">
        <!-- 用户登录 -->
        <div class="account-info">
          <div>
            <a href="/#/login" class="userinfo">
              <van-image
                round
                width="50px"
                height="50px"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                class="imguesr"
              />
              <em>立即登录</em>
            </a>
            <a href="###" class="edu">
              <p>查看乐卡额度</p>
            </a>
          </div>
        </div>
        <!-- 收藏、优惠券 -->
        <div style="background: rgba(255,255,255,.2)">
          <ul class="item-bd">
            <li>
              <div>
                <h3>0</h3>
                <span>优惠券</span>
              </div>
            </li>
            <li>
              <div>
                <h3>0</h3>
                <span>收藏</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 账单 -->
      <van-cell-group class="user-group">
        <van-cell icon="label-o" title="本月账单" is-link value="全部" class="fSize" />
      </van-cell-group>
      <!-- 订单 -->
      <van-cell-group>
        <van-cell icon="records" title="我的订单" is-link value="全部" class="fSize" />
      </van-cell-group>

      <van-row class="user-links">
        <van-col span="6">
          <van-icon name="pending-payment" />待付款
        </van-col>
        <van-col span="6">
          <van-icon name="records" />待接单
        </van-col>
        <van-col span="6">
          <van-icon name="tosend" />待发货
        </van-col>
        <van-col span="6">
          <van-icon name="logistics" />已发货
        </van-col>
      </van-row>

      <!-- 服务 -->
      <van-cell-group class="mTop">
        <van-cell class="fSize" icon="shopping-cart-o" title="我的购物车" is-link />
        <van-cell class="fSize" icon="balance-pay" title="我的优惠券" is-link />
        <van-cell class="fSize" icon="comment-o" title="我的预约" is-link />
        <van-cell class="fSize" icon="debit-pay" title="我的银行卡" is-link />
        <van-cell class="fSize" icon="bulb-o" title="安全中心" is-link />
        <van-cell class="fSize" icon="service" title="客服中心" is-link />
      </van-cell-group>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

.bgcolor {
  background-color: #f5f7f6;
}
.mTop {
  margin-top: 15px;
}
.fSize {
  font-size: 16px;
}
.topFixed {
  // margin-top: ;
  margin-top: 1.302222rem;
}

.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.tophead h1 {
  //   background-color: #3b9bff;
  // float: right;
  overflow: hidden;
}

.tophead {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
  background: url(//cres.fenqile.cn/mobile/img/app/my_set/top_hd.png) no-repeat;
}
.tophead h1 p {
  display: inline-block;
  line-height: 1.222222rem;
  height: 1.222222rem;
  font-size: 16px;
  float: right;
  vertical-align: middle;
  color: #fff;
  margin-bottom: 0;
}
.tophead h1 .toptit {
  float: right;
  vertical-align: middle;
  line-height: 1.222222rem;
  margin-left: 0.37037rem;
  margin-right: 0.555556rem;
}

.account-top-con {
  background: url(//cres.fenqile.cn/mobile/img/app/my_set/top_bd.png) no-repeat;
  height: 4.166667rem;
}

.account-info {
  padding: 0.555556rem 0.416667rem 1.111111rem;
  overflow: hidden;
}
.account-info a {
  display: block;
}
.account-info a em {
  color: #fff;
  font-size: 16px;
  vertical-align: middle;
}
.account-info a p {
  color: #fff;
}
.item-bd {
  display: flex;
  justify-content: center;
  align-content: center;
}
.item-bd li {
  width: 50%;
  text-align: center;
  color: #fff;
}
.item-bd li:nth-child(1) {
  border-right: 2px solid rgba(255, 255, 255, 0.507);
}
.item-bd li h3 {
  font-size: 18px;
  margin-bottom: 0;
  color: #fff;
}
.imguesr {
  vertical-align: middle;
  margin-right: 0.138889rem;
}
.userinfo {
  float: left;
}
.edu {
  float: right;
  line-height: 50px;
  font-size: 16px;
}
.edu p {
  margin-bottom: 0.186296rem;
}
</style>