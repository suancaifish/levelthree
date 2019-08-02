<template>
  <div>详情页</div>
</template>
<script>
export default {
  // 接收路由组建传给我的props
  props: ["default", "sidebar"],
  created() {
    // console.log(this.$store.state.name);//直接获取state的值
    // console.log(this.$store.getters.getName);
    //mutation触发的方法
    // console.log(this.$store.commit("getNum"));
    // console.log(this.$store.dispatch("getNum"));
  }
};
</script>

