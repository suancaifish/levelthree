<template>
  <div>
    <router-view></router-view>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="directory">分类</van-tabbar-item>
      <van-tabbar-item icon="coupon-o">乐卡</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return { active: 0 };
  }
};
</script>
