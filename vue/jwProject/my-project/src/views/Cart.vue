<template>
  <div>
    <van-nav-bar
      title="购物车"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- :price="totalPrice" -->
    <!-- :disabled="!checkedGoods.length" -->
    <van-submit-bar :button-text="submitBarText" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked"></van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checked: ""
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast("点击结算");
    },
    //导航返回和编辑
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>

<style lang="less" scoped>
.van-submit-bar__bar {
  padding-left: 10px;
}
.van-submit-bar__text {
  margin-left: 10px;
}
.van-button--danger {
  background-color: #407aff;
  color: #fff;
  border-color: #407aff;
  width: 3.52rem;
  height: 1.49333rem;
  font-size: 20px;
}
.van-button__text {
  line-height: 1.49333rem;
}
.van-submit-bar__text {
  font-size: 20px;
  text-align: left;
  //   border-top:1px solid #dadee6;
  width: 3.52rem;
  height: 1.49333rem;
  line-height: 1.49333rem;
}
.van-submit-bar {
  border-top: 1px solid #dadee6;
}
.van-submit-bar__bar {
  height: 1.49333rem;
}
.van-nav-bar .van-icon {
  color: #ccc;
  font-size: 20px;
}
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>