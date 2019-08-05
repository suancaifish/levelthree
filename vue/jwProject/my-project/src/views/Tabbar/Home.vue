<template>
  <div>
    <!-- 搜索组件 -->
    <van-search placeholder="请输入搜索关键词" v-model="value" :style="stylesea" />
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item v-for="value in 5" :key="value" icon="photo-o" text="文字" />
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
  </div>
</template>



  

<script>
// @ is an alias to /=src

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      value: "",
      border: true,
      stylesea: {
        width: "90%"
      },
      // 轮播图下面样式
      styleswiper: {
        marginBottom: "15px"
      },
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
        "https://cimgs1.fenqile.com/ibanner2/M00/00/30/kKgHAF02yriAefIwAAAmd8nsnH8779_344x144.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/86/j6gHAF0bOI6AdiBoAAA-Mx6YyWw423_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/15/jqgHAF0bAn6AE1cKAAApmh4IJM8390_344x144.png"
      ]
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>


<style scoped>
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
</style>
