<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow :z-index="-1" :border="false">
      <van-icon slot="right" name="arrow-left" />
    </van-nav-bar>
    <!-- 搜索框 -->
    <van-search placeholder="搜索你感兴趣的商品" v-model="value" :style="stylesearch" />

    <!-- 侧栏 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      stylesearch: {
        position: "fixed",
        top: "-3px",
        width: "90%",
        left: "30px"
      }
      
    };
  }
};
</script>


<style>
.van-nav-bar .van-icon {
  color: #ddd;
}
</style>
