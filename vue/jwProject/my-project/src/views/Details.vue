<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="(item,index) in thumb" :key="index">
        <img :src="item.pic_url" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group :border="false">
      <van-cell class="goods-express">
        <div class="goods-price">
          <span>
            ￥
            <b class="price" v-text="price.real_amount">38</b>
          </span>
          <del class="odlprice">￥{{price.amount}}</del>
        </div>

        <div class="fenqi">
          <span class="mon">
            <em>￥</em>
            {{price.mon_pay}}
          </span>
          <span class="qishu">x{{price.fq_num}}期 ></span>
        </div>
      </van-cell>
      <!-- 价格 -->
      <van-cell>
        <div>
          <span class="zi">自营</span>
          <span class="zheng">正品</span>
          <div class="goods-title" v-text="title"></div>
        </div>

        <div class="mianshu" v-text="details.product_desc"></div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group flagtnt" @click="showPopup">
      <div class="cuxiao">促销</div>
      <div class="goodflag">
        <div>
          <span v-text="this.flag.present_list[0].name"></span>
          <p class="flag1" v-text="this.flag.present_list[0].desc"></p>
        </div>

        <div>
          <span v-text="this.flag.present_list[1].name"></span>
          <p class="flag1" v-text="this.flag.present_list[1].desc"></p>
        </div>
        <div>
          <span v-text="this.flag.present_list[2].name"></span>
          <p class="flag1" v-text="this.flag.present_list[2].desc"></p>
        </div>
      </div>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>

    <!-- 弹出 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }" class="popupfather">
      <div class="popup">
        <p>促销</p>
        <div class="popupflag">
          <div class="flag2">
            <p v-text="this.flag.present_list[0].name"></p>
            <p v-text="this.flag.present_list[0].desc"></p>
          </div>

          <div class="flag2">
            <p v-text="this.flag.present_list[1].name"></p>
            <p v-text="this.flag.present_list[1].desc"></p>
          </div>
          <div class="flag2">
            <p v-text="this.flag.present_list[2].name"></p>
            <p v-text="this.flag.present_list[2].desc"></p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumb: [],
      title: "huawei p30",
      details: "",
      price: "",
      express: "免运费",
      remain: 19,
      flag: [],
      show: false
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      //   Toast("暂无后续逻辑~");
    },
    showPopup() {
      this.show = true;
    }
  },
  async mounted() {
    //   获取商品详情
    let picList = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/details"
    );
    this.thumb = picList.data.data.result_rows.spu_info.pic_list;
    let detailCont = picList.data.data.result_rows;
    this.title = detailCont.spu_info.product_name;
    this.details = detailCont.spu_info;
    // console.log(picList);
    // 商品价格
    let priceDetail = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/pricce"
    );
    this.price = priceDetail.data.data.result_rows.active_amount_info;
    let flagCont = priceDetail.data.data.result_rows;
    this.flag = flagCont;
    // console.log(this.flag.present_list[0].desc);
  }
};
</script>

<style lang="less" scoped>
.popupfather {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
}
.popup > p {
  padding-left: 15px;
  padding-right: 15px;
  line-height: 44px;
  text-align: center;
  font-size: 15px;
  color: #394050;
  border-bottom: 1px solid #e8eaee;
}
.popupflag .flag2 {
  display: block;
  overflow: hidden;
  padding: 15px 0;
  border-bottom: 1px solid #e8eaee;
}
.popupflag .flag2 p {
  float: left;
}
.popupflag .flag2 p:nth-child(1) {
  color: #ff498d;
  box-sizing: border-box;
  border: 1px solid #ff498d;
  padding: 0 2px;
  margin-left: 15px;
  margin-right: 10px;
  font-size: 9px;
}
.popupflag .flag2 p:nth-child(2) {
  width: 70%;
  font-size: 12px;
}
.popup .goodflag > div .flag2 {
  display: block;
  float: left;
  overflow: hidden;
}
.flagtnt {
  padding: 20px 0;
}
.cuxiao {
  display: inline-block;
  line-height: 18px;
  font-size: 14px;
  padding-right: 16px;
  color: #abadb2;
  float: left;
  margin-left: 15px;
}
.goodflag {
  display: inline-block;
  width: 80%;
}
.goodflag > div > span {
  float: left;
  color: #ff498d;
  box-sizing: border-box;
  border: 1px solid #ff498d;
  height: 16px;

  font-size: 9px;

  padding: 0 2px;
  margin-right: 5px;
}
.goodflag > div > .flag1 {
  margin-bottom: 14px;
  line-height: 16px;
  height: 16px;
  font-size: 14px;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
.goods {
  background-color: #f5f7f6;
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.goods-price {
  color: #ff498d;
  float: left;
}
.fenqi {
  float: right;
}
.fenqi .mon {
  color: #ff498d;
  font-size: 18px;
  font-weight: bold;
}
.fenqi .mon em {
  font-size: 12px;
  margin-right: -7px;
}

.fenqi .qishu {
  color: #abadb2;
  font-size: 12px;
  font-weight: 500;
}

.goods-price .price {
  font-size: 28px;
}
.odlprice {
  color: #ccc;
  margin-left: 0.092593rem;
}
.goods-express {
  margin-top: 15px;
}
.mianshu {
  line-height: 20px;
  font-size: 12px;
  word-break: break-word;
  color: #abadb2;
}
.goods-title {
  display: inline-block;
}
.zi {
  color: #fff;
  background-color: #ff498d;
  font-size: 12px;
  line-height: 20px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid #ff498d;
}
.zheng {
  box-sizing: border-box;
  color: #ff498d;
  background-color: #fff;
  border: 1px solid #ff498d;
  line-height: 20px;
  font-size: 12px;
  line-height: 20px;
  margin-right: 5px;
}
</style>