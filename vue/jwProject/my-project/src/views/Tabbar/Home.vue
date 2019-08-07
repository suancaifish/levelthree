<template>
  <div>
    <!-- 搜索组件 -->
    <div :style="fixedTop">
      <van-search placeholder="请输入搜索关键词" v-model="value" :style="stylesea" />
      <van-icon name="shopping-cart-o" :class="{topcart:istopcart}" />
    </div>
    <!-- 宫格 -->
    <van-grid :column-num="5" :border="false" :style="marginTop">
      <van-grid-item
        v-for="(value,index) in navImgs"
        :key="index"
        :icon="value.url"
        :text="value.tit"
      >
        <!-- <van-image :src="value.url" :class="{navImg}"  /> -->
        <!-- <van-icon :name="value.url" /> -->
      </van-grid-item>
    </van-grid>

    <!-- 轮播 -->
    <van-swipe :autoplay="3000" :height="180" :style="styleswiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" class="swiperimg" />
      </van-swipe-item>
    </van-swipe>

    <!-- 格子 -->
    <van-grid :border="false" :gutter="-10" :column-num="2">
      <van-grid-item v-for="(value,index) in geziImg" :key="index">
        <van-image :src="value" :style="stylegezi" />
      </van-grid-item>
    </van-grid>

    <!-- 水平列表 秒杀-->
    <div>
      <SwiperSide></SwiperSide>
    </div>

    <!-- 精品分期 -->

    <div>
      <Spacing></Spacing>
    </div>

    <!-- 逛一逛 -->
    <div>
      <Guang></Guang>
    </div>

    <!-- 为你推荐 -->
    <Recommend></Recommend>
  </div>
</template>



  
<script>
// @ is an alias to /=src
import SwiperSide from "../../components/SwiperSide";
import Spacing from "../../components/Spacing";
import Guang from "../../components/Guang";
import Recommend from "../../components/Recommend";

export default {
  name: "swiperSide",
  components: {
    SwiperSide,
    Spacing,
    Guang,
    Recommend
  },
  data() {
    return {
      value: "",
      border: true,
      stylesea: {
        width: "90%"
      },
      fixedTop: {
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: "5",
        background: "white"
      },
      marginTop: {
        marginTop: "50px"
      },
      istopcart: true,
      // 轮播图下面样式
      styleswiper: {
        marginBottom: "15px"
      },
      //导航宫格
      navImgs: [
        {
          tit: "小赚一笔",
          url:
            "https://cimgs1.fenqile.com/ibanner2/M00/37/D4/jqgHAFzxCHaAZ-IhAAAdZ-7ssB0545_96x96.png"
        },
        {
          tit: "旅游出行",
          url:
            "https://cimgs1.fenqile.com/ibanner2/M00/01/33/j6gHAFw3TJaAaBTnAAAoPZS4S2g698_96x96.png"
        },
        {
          tit: "乐花借钱",
          url:
            "https://cimgs1.fenqile.com/ibanner2/M00/01/33/j6gHAFw3CWOAYIniAAAhq_2zi-A704_96x96.png"
        },
        {
          tit: "乐还款",
          url:
            "https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBDqAF7gCAAAaz3hmlmI290_96x96.png"
        },
        {
          tit: "娱乐充值",
          url:
            "https://cimgs1.fenqile.com/ibanner/M00/02/B3/wicJAFnvBE-AUniGAAAiogTEaHo835_96x96.png"
        }
      ],
      //导航类名
      navImg: true,
      // 轮播图图片数组
      images: [
        "https://cimgs1.fenqile.com/ibanner2/M00/06/C9/j6gHAF1CsnaAN6CWAADa9hxPoLw183_750x320.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/E1/jagHAF0RzuaABKHRAAGChxlTVgc359_750x320.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/01/3C/j6gHAFxAa9SANOf8AAF6_QBmUBk640_750x320.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/32/D0/jqgHAFxAa5qASeRQAAGoO_8-BGQ696_750x320.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/CC/j6gHAF1EHdqAXOL4AAG31ndJ7BI127_750x320.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/00/43/kKgHAF1D9HaAQ5NyAAE8xtcg0jI994_750x320.jpg"
      ],
      // 宫格样式
      stylegezi: {
        padding: "0px",
        marginTop: "-15px"
        //  marginBotton:'-10px'
      },
      // 格子图片
      geziImg: [
        "https://cimgs1.fenqile.com/ibanner2/M00/38/08/jqgHAF0TP9aAJMQ5AAA-QSSug5g024_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/86/j6gHAF0bOI6AdiBoAAA-Mx6YyWw423_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/86/j6gHAF0bOI6AdiBoAAA-Mx6YyWw423_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/15/jqgHAF0bAn6AE1cKAAApmh4IJM8390_344x144.png"
      ],
      //水平列表图片
      swiperImg: [
        "https://cimgs1.fenqile.com/product4/M00/0A/7A/g8MHAFzQDEuAE2fRAAN0mr7FOds289_156x156.jpg",
        "https://cimgs1.fenqile.com/product3/M00/11/DE/RbQHAFs5zf2AanxEAATuvleaN8U072_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/04/CA/g8MHAFy1a3uAYbkNAAJEqfeC2c8163_156x156.png",
        "https://cimgs1.fenqile.com/product5/M00/52/56/LdEHAF0xpuKAYBz2AAGytpdxd-M620_156x156.jpg",
        "https://cimgs1.fenqile.com/product/M00/EF/13/hRoGAFqjmTKAU32CAAGTVOo9cAE071_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/32/C7/g8MHAFz0yJWAS8lDAARbMbkPE_U262_156x156.jpg",
        "https://cimgs1.fenqile.com/product4/M00/0B/24/g8MHAFzWNCGAcB-yAALwGId8a3U007_156x156.jpg",
        "https://cimgs1.fenqile.com/product5/M00/24/1D/LtEHAF0hs1SAGS5bAAJlxwSFBOc576_156x156.jpg"
      ]
    };
  },
  methods: {
    onSearch() {}
  },
  async created() {
    // let navImgstes = await axios.post
  },
  activated() {
    window.onscroll = () => {
      // console.log(window.scrollY);
    };
  }
};
</script>


<style scoped>
html,
body {
  background-color: black;
}
.swiperimg {
  width: 100%;
  height: 180px;
}
.geziImg {
  width: 180px;
  height: 76px;
}
.van-icon__image {
  width: 170px;
  height: 75px;
}
.navImg {
  height: 48px;
  width: 48px;
}
.topcart {
  position: absolute;

  top: 12px;
  right: 10px;
  font-size: 30px;

  color: #5e5e5e;
}

.fixedTop {
  position: relative;
  top: 0px;
}

.marginTop {
  margin: 50px;
}
</style>
