<template >
  <div class="cart">
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="cartcont">
      <div class="cart-shop">
        <div class="cart-tit">
          <van-checkbox v-model="checked"></van-checkbox>
          <p>Apple产品专营店</p>
        </div>

        <div class="good-cont">
          <div class="goods">
                    <van-checkbox v-model="checked"></van-checkbox>

            <div class="goods-pic">
              <img
                src="http://cimgs1.fenqile.com/product3/M00/35/58/RbQHAFuZhD2AWXbBAAHUV66EiZw822_160x160.png"
                alt
              />
            </div>

            <div class="goods-tit">
              <p class="title">苹果（Apple）iPhone XR国行正品双卡双待智能手机</p>
              <div class="banben">
                <p>黑色，128GB</p>
                <p>选服务</p>
              </div>
              <div class="fenqi">3期免息</div>
              <div class="price">
                <div class="realprice">
                  <span>￥</span>
                  <span>5299</span>
                </div>
                <van-stepper v-model="value" min="1" max="5" />
              </div>
            </div>
          </div>
          <div class="goods">
          <van-checkbox v-model="checked"></van-checkbox>
           
            <div class="goods-pic">
              <img
                src="http://cimgs1.fenqile.com/product3/M00/35/58/RbQHAFuZhD2AWXbBAAHUV66EiZw822_160x160.png"
                alt
              />
            </div>

            <div class="goods-tit">
              <p class="title">苹果（Apple）iPhone XR国行正品双卡双待智能手机</p>
              <div class="banben">
                <p>黑色，128GB</p>
                <p>选服务</p>
              </div>
              <div class="fenqi">3期免息</div>
              <div class="price">
                <div class="realprice">
                  <span>￥</span>
                  <span>5299</span>
                </div>
                <van-stepper v-model="value1" min="1" max="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-bottom">
      <div class="cart-bottom-cont">
        <van-submit-bar :price="1059800" :decimal-length="0" button-text="结算" @submit="onSubmit">
          <van-checkbox v-model="checked"></van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      list: ["a"],
      result: ["a"],
      // 数量默认值
      value:1,
      value1:1
    };
  },
  methods: {
    onClickLeft() {
      console.log(1);
      this.$router.go(-1);

    },
    onClickRight() {
      console.log(2);
    },
    onSubmit(){
      console.log('正在跳转到支付页面');
    }
  }
};
</script>

<style lang="scss" scoped>
.van-submit-bar__bar {
  height: 1.49333rem;
  box-sizing: border-box;
  padding-left: 10px;
  border-top: 1px solid #dadee6;
  .van-button--large {
    height: 100%;
    width: 3.52rem;
    background-color: #407aff;
    border-color: #407aff;
  }
  .van-tabbar-item {
    height: 100%;
  }
  .van-submit-bar__text {
    text-align: left;
    margin-left: 10px;
    .van-submit-bar__price {
      color: #407aff;
    }
  }
}
.cart-bottom-cont {
  overflow: hidden;
}
.cart {
  background: #f5f7f6;
  .cartcont {
    background-color: #fff;

    .cart-tit {
      display: flex;
      align-content: center;
      padding: 0 18px;
      border-bottom: 1px solid #ededee;
      p {
        font-size: 0.37333rem;
        color: #050c1c;
        margin-left: 0.05333rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 52px;
        margin-left: 10px;
      }
    }
  }
}

.good-cont {
  .goods {
    padding-top: 0.42667rem;
    padding-left: 0.42667rem;
    padding-right: 0.42667rem;
    padding-bottom: 0.42667rem;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    border-bottom: 5px solid #f5f7f6;
    .van-checkbox{
      padding-right: 10px;;
    }
    &:nth-last-child(1) {
      border-bottom: none;
    }
    .goods-pic {
      width: 2.50667rem;
      height: 2.50667rem;
      margin-left: 0.13333rem;
      margin-right: 0.29333rem;
      img {
        width: 2.50667rem;
        height: 2.50667rem;
      }
    }
  }
}
.goods-tit {
  .title {
    font-size: 0.34667rem;
    color: #363c48;
    line-height: 0.48rem;
    height: 0.48rem;
    padding-bottom: 0.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    -webkit-line-clamp: 1;
  }
  .banben {
    height: 0.64rem;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: #ededee;
    border-radius: 0.05333rem;
    display: flex;
    justify-content: space-between;
    p {
      line-height: 0.64rem;
      margin-bottom: 0;
      &:nth-child(1) {
        margin-left: 5px;
      }
      &:nth-child(2) {
        margin-right: 5px;
      }
    }
  }
  .fenqi {
    margin-top: 0.16rem;
    display: inline-block;
    padding-left: 0.10667rem;
    padding-right: 0.10667rem;
    margin-right: 0.10667rem;
    font-size: 10px;
    border: 1px solid rgba(255, 74, 141, 0.6);
  }
  .price {
    margin-top: 0.56rem;
    display: flex;
    justify-content: space-between;
    span {
      color: #ff4a8d;
      &:nth-child(1) {
        font-size: 0.32rem;
      }
      &:nth-child(2) {
        font-size: 0.48rem;
        font-weight: 500;
        margin-left: 0.02667rem;
      }
    }
  }
}
</style>