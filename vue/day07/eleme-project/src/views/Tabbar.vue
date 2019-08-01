<template>
  <div>

    <router-view></router-view>
    
    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="homer">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="find">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="order">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
