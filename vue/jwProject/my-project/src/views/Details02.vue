<template>
  <div class="goods">
    <van-sticky>
      <van-nav-bar title="商品详情" left-arrow @click-right="onClickRight" @click-left="onClickLeft">
        <van-icon name="wap-home" slot="right" color="#01106E" size="20px" />
      </van-nav-bar>
    </van-sticky>
    <!-- 图片区域 -->
    <van-swipe class="goods-swipe" @change="onChange">
      <van-swipe-item v-for="(item,index) in thumb" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group :border="false">
      <van-cell class="goods-express">
        <div class="goods-price">
          <span>
            ￥
            <b class="price" v-text="phoneInfo.real_amount">38</b>
          </span>
          <del class="odlprice">￥{{phoneInfo.mart_amount}}</del>
        </div>

        <div class="fenqi">
          <span class="mon">
            <em>￥</em>
            {{phoneInfo.mon_pay}}
          </span>
          <span class="qishu">x{{phoneInfo.fq_num}}期 ></span>
        </div>
      </van-cell>
      <!-- 价格 -->
      <van-cell>
        <div>
          <div class="dingwei">
            <span class="zi">自营</span>
            <span class="zheng">正品</span>
          </div>

          <div class="goods-title" v-text="phoneInfo.product_name"></div>
        </div>

        <div class="mianshu" v-text="phoneInfo.product_desc"></div>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group flagtnt" @click="showPopup">
      <div class="cuxiao">促销</div>
      <div class="goodflag">
        <div>
          <span v-text="this.flag1.name"></span>
          <p class="flag1" v-text="this.flag1.desc"></p>
        </div>

        <div>
          <span v-text="this.flag2.name"></span>
          <p class="flag1" v-text="this.flag2.desc"></p>
        </div>
        <div>
          <span v-text="this.flag3.name"></span>
          <p class="flag1" v-text="this.flag3.desc"></p>
        </div>
      </div>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="service-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-icon icon="like-o">收藏</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
    </van-goods-action>

    <!-- 弹出 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }" class="popupfather">
      <div class="popup">
        <p>促销</p>
        <div class="popupflag">
          <div class="flag2">
            <p v-text="this.flag1.name"></p>
            <p v-text="this.flag1.desc"></p>
          </div>

          <div class="flag2">
            <p v-text="this.flag2.name"></p>
            <p v-text="this.flag2.desc"></p>
          </div>
          <div class="flag2">
            <p v-text="this.flag3.name"></p>
            <p v-text="this.flag3.desc"></p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
// 
<script>
export default {
  data() {
    return {
      thumb: [],
      express: "免运费",
      remain: 19,
      flag: [],
      flag1: { name: "免息", desc: "乐卡6期免息" },
      flag2: {
        name: "全场加价购",
        desc:
          "全场满99元另加39元，或满199元另加69元，或满399元另加99元，即可在购物车换购热销商品"
      },
      flag3: {
        name: "限制",
        desc: "购买不超过1件时享受优惠，超出数量以结算价为准"
      },
      show: false,
      id: "",
      id2: "",

      // =====
      searchid: "",
      searchgoods: [],
      phoneInfo: "",
      // ====
      Phonecontent: [],
      phoneTitle: ""
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
    },
    // 图片手动滑动
    onChange(index) {
      this.current = index;
    },
    // 点击右上角主页图标
    onClickRight() {
      // console.log(11);
      this.$router.push("/");
    },
    // 点击返回按钮
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  async mounted() {
    // 仓库获取值
    this.id = this.$store.state.id;
    this.id2 = this.$store.state.id2;
    this.Phonecontent = this.$store.state.Phonecontent;

    this.searchgoods = this.$store.state.searchgoods;
    this.searchid = this.$store.state.searchid;
    // console.log(this.searchid);

    // console.log(this.$store.state.searchgoods[this.searchid].sku_pic[0]);

    // 图片集合  图片不够循环生成4张
    let img = this.$store.state.searchgoods[this.searchid].sku_pic[0];
    let arr = [];

    for (var i = 0; i < 4; i++) {
      arr.push(img);
    }
    this.thumb = arr;

    // console.log(this.searchgoods);
    // 拿到对应的下标  图片可以了   把值赋给title  然后渲染

    // 接收id吧对应的商品内容给到phoneInfo
    this.phoneInfo = this.searchgoods[this.searchid];
    // console.log(this.phoneInfo);

    // 商品价格、促销信息  --search固定
    let priceDetail = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/pricce"
    );

    let flagCont = priceDetail.data.data.result_rows;
    this.flag1 = flagCont.present_list[0];
    this.flag2 = flagCont.present_list[1];
    this.flag3 = flagCont.present_list[2];
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar .van-icon {
  color: #01106e;
}
.van-nav-bar__arrow {
  font-size: 20px;
}
.van-goods-action-button--last {
  margin-right: 0;
}
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
  display: inline;
  margin-left: 60px;
}

.dingwei {
  position: absolute;
  left: 0;
  margin-right: 10px;
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
.van-goods-action-button--warning {
  height: 50px;
  background: #5a99ff;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.van-goods-action-button--danger {
  background: #407aff;
  height: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>