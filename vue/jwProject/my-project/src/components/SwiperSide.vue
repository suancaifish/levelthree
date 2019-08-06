<template>
  <div>
    <div style="width:100%" class="miaosha">
      <div class="ms-info">
        <div class="ms-tit">乐疯抢</div>
        <van-count-down :time="time" :style="CountDownStyle">
          <template v-slot="timeData">
            <span class="time-tip">距离本场结束</span>
            <span class="item">{{ timeData.hours }}</span>:
            <span class="item">{{ timeData.minutes }}</span>:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>

      <div class="mslist">
        <ul class="swpier-side-ul">
          <div
            class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-android"
          >
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                style="width: 100px; margin-right:10px;"
                v-for="(value,index) in swiperImg"
                :key="index"
              >
                <li>
                  <a href>
                    <div class="item-img">
                      <img :src="value" alt />
                    </div>
                    <div class="info">
                      <div class="item-pay">
                        <span>￥</span>
                        999
                      </div>
                      <div class="item-price">¥2098</div>
                    </div>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import "../javaScript/swiper";
export default {
  data() {
    return {
      swiperImg: [
        "https://cimgs1.fenqile.com/product4/M00/0A/7A/g8MHAFzQDEuAE2fRAAN0mr7FOds289_156x156.jpg",
        "https://cimgs1.fenqile.com/product3/M00/11/DE/RbQHAFs5zf2AanxEAATuvleaN8U072_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/04/CA/g8MHAFy1a3uAYbkNAAJEqfeC2c8163_156x156.png",
        "https://cimgs1.fenqile.com/product5/M00/52/56/LdEHAF0xpuKAYBz2AAGytpdxd-M620_156x156.jpg",
        "https://cimgs1.fenqile.com/product/M00/EF/13/hRoGAFqjmTKAU32CAAGTVOo9cAE071_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/32/C7/g8MHAFz0yJWAS8lDAARbMbkPE_U262_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/0B/24/g8MHAFzWNCGAcB-yAALwGId8a3U007_156x156.jpg",
        "https://cimgs1.fenqile.com/product5/M00/24/1D/LtEHAF0hs1SAGS5bAAJlxwSFBOc576_156x156.jpg"
      ],
      //倒计时时间样式
      CountDownStyle: {
        float: "right",
        marginRight: "10px",
        color: "#ccc",
        lineHeight: "20px",
        textalign: "top"
      },

      //倒计时时间
      time: 60 * 60 * 1000
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
  }
};
</script>


<style>
.swpier-side-ul {
  margin-left: 10px;
}
.swiper-container {
  margin-left: 5px;
}
.swpier-side-ul .item-img {
  width: 78px;
  margin: 0 auto 12px;
  overflow: hidden;
}

.swpier-side-ul .item-img img {
  height: 1.944444rem;
  width: 1.944444rem;
}
.swpier-side-ul .info {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
.ms-tit {
  font-size: 16px;
  margin-left: 15px;
}
.ms-info .ms-tit {
  font-style: 16px;
  float: left;
  margin-left: 15px;
  color: #25324e;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #3c3f56;
  border-radius: 3px;
}
.swpier-side-ul .info .item-pay {
  color: #fe4979;
  font-size: 12px;
  font-weight: 500;
}
.swpier-side-ul .info .item-price {
  text-decoration: line-through;
}
.ms-info {
  overflow: hidden;
  margin-bottom: 10px;
}
.time-tip {
  margin-right: 8px;
  font-size: 12px;
  line-height: 22px;
}
</style>
