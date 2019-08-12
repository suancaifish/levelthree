<template>
  <div>
    <!-- 搜索框 -->
    <div class="seaBox">
      <van-button icon="arrow-left" type="primary" @click="goBack" />
      <van-search v-model="value" @focus="onfocus" placeholder="搜索商品关键词 例如:手机" show-action>
        <div slot="action">
          <van-button type="info" size="small" v-if="!goodShow" @click="onSearch()">搜索</van-button>
          <van-button icon="apps-o" type="primary" class="gezi" v-if="goodShow" />
        </div>
      </van-search>
    </div>

    <div class="recSearch" v-if="!goodShow">
      <div class="sea-tit">
        <span>热门搜索</span>
        <van-icon name="replay" size="16px" />
      </div>
      <!-- 关键词 -->
      <div class="keyword">
        <div class="word" v-for="(item,index) in hotWoed" :key="index">
          <p v-text="item.title">苹果8</p>
        </div>
      </div>
    </div>

    <!-- 筛选栏 -->
    <van-sticky>
      <div class="DropdownMenu" v-if="goodShow">
        <div class="zh">
          <p>综合</p>
        </div>
        <div class="xl">
          <p>销量</p>
        </div>
        <div class="jg">
          <p>价格</p>
          <div class="updown">
            <div class="up"></div>
            <div class="down"></div>
          </div>
        </div>
        <div class="sx" @click="showDrawer">
          <p>筛选</p>
        </div>
      </div>
    </van-sticky>
    <!-- 筛选左侧抽屉 -->
    <div>
      <a-drawer
        width="80%"
        title="商品筛选"
        placement="right"
        :closable="false"
        @close="onClose"
        :visible="visible"
      >
        <div class="price-qujian">
          <p>价格区间</p>
          <div>
            <input type="text" placeholder="最低价" />
            <div></div>
            <input type="text" placeholder="最高价" />
          </div>
        </div>
        <van-divider />

        <div class="price-qujian banlk">
          <p>品牌</p>
          <div>
            <input type="text" disabled placeholder="苹果（Apple）" />
            <input type="text" disabled placeholder="vivo" />
            <input type="text" disabled placeholder="小米(MI)" />
          </div>
        </div>
        <div class="price-qujian banlk colorgood">
          <p>颜色</p>
          <div>
            <input type="text" placeholder="黑色" disabled />
            <input type="text" placeholder="金色" disabled />
            <input type="text" placeholder="银色" disabled />
          </div>
        </div>
        <div class="price-qujian banlk colorgood">
          <p>版本</p>
          <div>
            <input type="text" disabled placeholder="1" />
            <input type="text" disabled placeholder="128G" />
            <input type="text" disabled placeholder="32G" />
          </div>
        </div>
      </a-drawer>
    </div>

    <!-- 商品列表 -->
    <div
      class="searchGoods"
      v-for="(item,index) in searchgoods"
      :key="index"
      v-show="goodShow"
      @click="toDetail02(index)"
    >
      <ul class="goods-list">
        <li>
          <div class="goods-pic">
            <img :src="item.sku_pic" alt />
          </div>

          <div class="goods-tit">
            <div class="title">
              <p class="zi">自营</p>
              <p class="tit-name" v-text="item.product_name">荣耀 9X 全网通双卡双待4G手机</p>
            </div>
            <div class="versions">
              <p v-text="item.sku_key_1">魅海蓝</p>
              <p class="split" v-if="item.sku_key_2"></p>
              <p v-text="item.sku_key_2" v-if="item.sku_key_2">6GB+128GB</p>
            </div>

            <div class="goods-price">
              <div class="price">
                <span>￥</span>
                <p v-text="item.amount">1899</p>
              </div>

              <div class="price-fq">
                <p>￥</p>
                <p v-text="item.mon_pay">65.38</p>
                <p>/月</p>
                <p>免息</p>
                <p>满减</p>
              </div>

              <div class="estimate">
                <p class="comment">{{item.total_comment_num}}条评价</p>
                <p class="like">{{item.good_comment_rate}}%好评</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="bottom-link"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

// Vue.use(Toast);
export default {
  data() {
    return {
      value: "",
      hotWoed: [],
      active: 2,
      show: false,
      visible: false,
      searchgoods: [],
      // 筛选栏和商品栏显示隐藏、关键词热词
      goodShow: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async onSearch() {
      // console.log('点击搜索');
      this.value = "手机";
      this.goodShow = true;

      // 更换状态
      // phone搜索数据
      Toast.loading({
        duration: 400,
        mask: true,
        message: "加载中..."
      });
      let searchgoods = await this.$axios(
        "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/searchgoods"
      );
      this.searchgoods = searchgoods.data.sku_list;
      // console.log(searchgoods.data.sku_list);

      this.$store.state.searchgoods = this.searchgoods;
    },
    //搜索框获取焦点的时候、回复搜索状态
    onfocus() {
      // console.log(111);
      this.goodShow = false;
    },

    // 弹出层
    showPopup() {
      this.show = true;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    toDetail02(id) {
      this.$store.state.searchid = id;
      this.$router.push({
        name: "Details02",
        params: {
          id: id
        }
      });
    }
  },
  async created() {
    // 搜索热词
    let SearchWord = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/search"
    );
    // console.log(SearchWord.data.data.result_rows.hot_search);
    this.hotWoed = SearchWord.data.data.result_rows.hot_search.slice(0, 20);
    // console.log(this.hotWoed);
  }
};
</script>


<style scoped>
p,
ul {
  margin-bottom: 0;
}
.searchGoods {
  position: relative;
}
.bottom-link {
  height: 1px;
  width: 95%;
  position: absolute;

  right: 0;
  bottom: 0;
  background-color: #e8eaee;
  /* margin-left:10px; */
}

.estimate {
  display: flex;
  padding-top: 12px;
}
.estimate p {
  margin-right: 5px;
  font-size: 10px;
  color: #979dab;
}
.price,
.price-fq {
  margin-top: 13px;
  display: flex;
}
.price-fq p {
  float: left;
}
.price-fq p:nth-child(1) {
  font-size: 8px;
  color: #ff4a8d;
  font-weight: bold;
}
.price-fq p:nth-child(2) {
  font-size: 16px;
  color: #ff4a8d;
  font-weight: 500;
  line-height: 20px;
}
.price-fq p:nth-child(3) {
  font-size: 10px;
  margin: 0 5px;
  line-height: 20px;
}
.price-fq p:nth-child(n + 4) {
  background-color: #fff;
  color: #ff4a8d;
  border: 1px solid rgba(255, 74, 141, 0.6);
  font-size: 10px;
  padding: 0 2px;
  margin-right: 4px;
  height: 18px;
  line-height: 16px;
}
.versions {
  display: flex;
  margin-top: 5px;
}
.split {
  width: 1px;
  background-color: #84888f;
  height: 8px;
  line-height: 16px;
  margin: 0 8px;
  margin-top: 5px;
}
.goods-list {
  padding: 0.555556rem 0.5rem;
  background-color: #fff;
  overflow: hidden;
}
.goods-list li {
  display: flex;
  align-content: center;
  justify-content: center;
}
.goods-list .goods-pic {
  /* float: left; */
}
.goods-list .goods-pic img {
  width: 3.211111rem;
  height: 3.211111rem;
}
.goods-list .goods-tit {
  /* float: left; */
  margin-left: 0.5rem;
}
.goods-list .goods-tit .title {
  /* display: flex; */
  overflow: hidden;
}
.goods-list .goods-tit .title .zi {
  /* float: left; */
  display: inline-block;

  color: #fff;
  height: 18px;
  font-size: 10px;
  line-height: 18px;
  background-color: #ff4a8d;
  padding: 0 3px;
  margin-right: 5px;
  margin-bottom: 0;
}
.tit-name {
  display: inline;
  /* float: left; */
  line-height: 18px;
  font-size: 13px;
  color: #363c48;
  margin-bottom: 0;
}
.price-qujian > div {
  /* display: flex; */
  justify-content: space-between;
}
.price-qujian {
  margin-bottom: 20px;
  overflow: hidden;
}
.price-qujian > div > div {
  height: 2px;
  width: 20px;
  flex-shrink: 1;
  padding: 1px;
  float: left;
  line-height: 0.8rem;
  margin: 15px 5px 0;

  background-color: #000;
}
.price-qujian > div > input {
  /* flex-basis: 40%; */
  float: left;
  border-color: transparent;
  height: 1rem;
  width: 120px;
  line-height: 0.8rem;
  text-align: center;
  color: #394050;
  font-size: 0.33rem;
  background-color: #f4f4f4;
  border-radius: 0.08rem;
}
.banlk > div > input {
  width: 30%;
  margin-right: 7px;
}
.updown {
  position: relative;
}
.updown .up {
  position: relative;
  height: 0.138889rem;
  width: 0.138889rem;
  border-style: solid;
  border-top-width: 0.02667rem;
  border-right-width: 0.02667rem;
  overflow: hidden;
  border-bottom: none;
  border-left: none;
  transform: rotate(-45deg);
  bottom: 0.66rem;
  left: 1.766667rem;
  border-color: #a7afc2;
}
.updown .down {
  position: relative;
  height: 0.138889rem;
  width: 0.138889rem;
  border-style: solid;
  border-top-width: 0.02667rem;
  border-right-width: 0.02667rem;
  transform: rotate(-45deg);
  overflow: hidden;
  /* top: -1px; */
  left: 1.766667rem;
  bottom: 0.71rem;
  border-top: none;
  border-right: none;

  border-color: #a7afc2;
}
.DropdownMenu .zh > p {
  color: #3b9bff;
}
.DropdownMenu {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 1.111111rem;
  border-bottom: 0.009259rem solid #ededee;
  background: #fff;
}
.DropdownMenu > div {
  flex: 1;
  text-align: center;
}
.DropdownMenu > div > p {
  line-height: 1.111111rem;
  color: #abadb2;
  font-size: 0.356296rem;
}
/* .van-button--small */
.van-button--info {
  background-color: #3b9bff;
  font-size: 14px;
}
.van-button--small {
  height: 35px;
  min-width: 40px;
  border-radius: 5px;
}
.van-icon-search {
  font-size: 20px;
  color: #ccc;
}

.van-button--primary {
  color: #d4d5d7;
  background-color: #fff;
  border: none;
  float: left;
  margin-top: 6px;

  font-size: 20px;
}
.van-button--normal {
  padding: 0 0px 0 15px;
}
.van-search__content {
  border-radius: 4px;
}
.recSearch {
  padding: 0.611111rem 0.511111rem 0;
}
.recSearch .sea-tit {
  display: flex;
  justify-content: space-between;
}
.sea-tit span {
  font-size: 14px;
  line-height: 22px;
}
.van-icon-replay {
  line-height: 22px;
}
.keyword .word p {
  display: inline;
  font-size: 14px;
  color: #25324e;
}
.keyword .word {
  display: inline;
  padding: 0.111111rem 0.40037rem;
  margin-top: 0.361111rem;
  margin-right: 0.301111rem;
  background-color: #f7f7f7;
}
.keyword {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.gezi {
  margin-top: 0;
}
.ant-drawer-header > .ant-drawer-title {
  text-align: center;
  color: blue;
}
</style>
