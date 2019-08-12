<template>
  <div>
    <div class="recommend">
      <p class="recommend-tit">为你推荐</p>
    </div>

    <div class="recommend-content">
      <ul class="recommend-list">
        <li v-for="(value,index) in recommendList" :key="index">
          <a href>
            <div class="item-img">
              <img :src="value.fe_sku_pic" alt />
            </div>
            <p
              class="item-title"
              v-text="value.product_info"
            >【二手95新】Apple/苹果MacBook Air 超薄款 苹果笔记本电脑i5 4G 128G 二手电脑</p>
            <div class="item-price">
              <p class="leka">
                <em class="leka-price">¥{{value.amount}}</em>
              </p>
              <div class="price text-decoration">¥{{value.mart_amount}}</div>
            </div>

            <div class="item-pay">
              <span class="item-pay-num">
                <i>¥</i>
                {{value.mon_pay}}
              </span>
              <span class="item-month">x36期</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 撑开底部导航的阻挡 -->
    <div :style="Bottonheigt"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      recommendList: [],
      Bottonheigt: {
        marginBottom: "50px"
      }
    };
  },
  async created() {
    let recommendContent = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/recommend"
    );
    this.recommendList = recommendContent.data.result_rows;
    // console.log(this.recommendList);
  }
};
</script>


<style scoped>
.recommend {
  border-top: 10px solid #eee;

  margin-top: 0.222222rem;
  height: 1.777778rem;
  background-color: #fff;
  
}
.recommend-tit {
  margin-left: 15px;
  font-size: 16px;
  line-height: 1.777778rem;
}
.recommend-list {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  border-top: 1px solid #e5e8ed;
}
.recommend-list li {
  box-sizing: border-box;
  width: 50%;
}
.recommend-list li {
  border-bottom: 1px solid #eee;
}
.recommend-list li:nth-child(2n-1) {
  border-right: 1px solid #eee;
}
.recommend-list li > a {
  display: block;
  padding: 0.222222rem 0.333333rem 0.5rem;
  font-size: 13px;
  color: #25324e;
  text-align: left;
}

.recommend-list li > a .item-img {
  position: relative;
  width: 3.888889rem;
  height: 3.888889rem;
  margin: 0.333333rem auto 0.666667rem;
  overflow: hidden;
}
.recommend-list li > a .item-img img {
  max-width: 100%;
}
.recommend-list li > a .item-title {
  height: 0.444444rem;
  line-height: 0.444444rem;
  margin-bottom: 0.333333rem;
  font-size: 13px;
  font-weight: 500;
  color: #25324e;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommend-list li > a .item-price {
  display: -webkit-box;
  -webkit-box-pack: start;
  -webkit-box-align: center;
  height: 18px;
}
.recommend-list li > a .item-price .leka-price {
  height: 0.444444rem;
  line-height: 0.444444rem;
  font-size: 12px;
  margin-right: 0.111111rem;
  font-style: normal;
}
.recommend-list li > a .item-price .price {
  text-decoration: line-through;
  font-size: 10px;
  line-height: 0.444444rem;

  color: #979dab;
}

.recommend-list li > a .item-pay {
  line-height: 0.388889rem;
  margin-top: 0.111111rem;
  font-size: 12px;
  font-weight: 500;
  color: #979dab;
}
.recommend-list li > a .item-pay .item-pay-num {
  color: #fe4979;
  font-weight: 500;
  font-size: 14px;
}
.recommend-list li > a .item-pay .item-pay-num i {
  padding-right: 1px;
  font-size: 11px;
  font-style: normal;
}
.recommend-list li > a .item-pay .item-month {
  font-size: 11px;
  color: #979dab;
}
</style>
