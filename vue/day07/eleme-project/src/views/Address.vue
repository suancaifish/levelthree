<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

    <van-area :area-list="areaList" title value="110101" @confirm="onconfirm" :class="{classA}" />
  </div>
</template>


<script>
import AreaList from "../vant/areaList";
export default {
  data() {
    return {
      areaList: AreaList,
      retu: [],
      confirmList: [],
      classA: true,
      title: "地址"
    };
  },
  methods: {
    onconfirm(val) {
      this.confirmList = val;

      this.title = "确认地址";
      this.$store.state.province = this.confirmList[0].name;
      this.$store.state.city = this.confirmList[1].name;
      this.$store.state.county = this.confirmList[2].name;
      this.$router.push("/");
     
    },
    onClickLeft() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
.classA {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

