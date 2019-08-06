<template>
  <div>
    <div class="spacing-tit">
      <p>精品分期</p>
    </div>
    <!-- 手机logo -->

    <van-tabs :border="false" title-active-color="pink">
      <van-tab v-for="(value,index) in Phonecontent" :key="index">
        <div slot="title">
          <van-icon :name="Phonecontent[index].desc" :style="logoStyle" />
        </div>
        <!-- 列表内容 -->
        <ul class="lists-pro-brand">
          <li v-for="(item,index) in value.floor_list[0].item_list" :key="index">
            <a href>
              <div class="item-img">
                <!-- 根本找不到图片路径 -->
                <img :src="item.fe_sku_pic" />
              </div>
              <div class="item-info">
                <h2
                  class="items-title"
                  v-text="item.sku_list[0].product_name"
                >【新品6期免息】一加7 骁龙855旗舰性能 4800万超清双摄 全面屏拍照游戏智能手机</h2>
                <div class="item-des">
                  <span v-text="item.front_tab_list[0]">骁龙855</span>
                  <span v-text="item.front_tab_list[1]">OIS光学防抖</span>
                  <!-- <span v-text="item.front_tab_list[2]">杜比全景声</span> -->
                </div>
              </div>
              <div class="item-price">￥{{item.sku_list[0].amount}}</div>
              <del>￥{{item.sku_list[0].mart_amount}}</del>
              <div class="item-pay">
                <span>
                  <i>¥</i>
                  {{item.sku_list[0].mon_pay}}
                </span>x36期
              </div>
            </a>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>




<script>
import phoneList from "./PhoneList";
export default {
  data() {
    return {
      //手机品牌logo图片
      phoneLogo: [],

      active: 2,
      logoStyle: {
        width: "75px",
        height: "45px"
      },
      Phonecontent: []
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  async created() {
    let Phone = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/phone"
    );
    this.phoneLogo = Phone.data.PhoneLogo;
    // console.log(this.phoneLogo);
    for (var i = 0; i < this.phoneLogo.length; i++) {
      this.Phonecontent.push(Phone.data.result_rows[i]);
    }

    // console.log(this.Phonecontent);
    //每个品牌对应的4条数据
    // console.log(this.Phonecontent[2].floor_list[0].item_list);
  }
};
</script>


<style scoped>
.spacing-tit {
  border-top: 1px solid #eee;
  margin-top: 0.185185rem;
  margin-bottom: 0;
}
.spacing-tit p {
  padding-top: .285185rem;
  font-size: 16px;
  margin-left: 15px;
}
.swiper-slide img {
  width: 100%;
}
.van-icon__image {
  width: 75px;
  height: 45px;
}
/* .item-img {
  width: 104px;
  height: 104px;
} */
.lists-pro-brand {
  padding: 0 16px 8px;
  background-color: #fff;
}
.lists-pro-brand li {
  /* height: 104px; */
  padding-left: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
}
.item-img {
  float: left;
  margin-right: 20px;
}
.item-img img {
  width: 2.888889rem;
  height: 2.888889rem;
}
.item-info {
  height: 68px;
}
.item-info .items-title {
  height: 20px;
  line-height: 20px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #25324e;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-info .item-des span {
  /* float: left; */
  padding: 2px;
  margin-bottom: 2px;
  height: 18px;
  line-height: 14px;
  display: inline-block;
  font-size: 10px;
  color: #fe4979;
  box-sizing: border-box;
  position: relative;
  margin-right: 4px;
  border: 1px solid #fe4979;
  border-radius: 2px;
}
.item-price {
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  margin-right: 4px;
  font-style: normal;
  color: #25324e;
  float: left;
}
.item-pay {
  height: 18px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 500;
  color: #979dab;
}

.item-pay span {
  color: #fe4979;
  font-size: 16px;
  font-weight: 500;
}
del {
  color: #25324e;
}
</style>

