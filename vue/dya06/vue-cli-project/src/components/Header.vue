<template>
  <header id="indexHeader" class="index--toutiaoribao">
    <div class="top_bar">
      <div class="abs_m">
        <a href="#" class="refresh_title btn"></a>
        <div class="refreshBtn-container">
          <i class="refresh_btn"></i>
        </div>
      </div>
      <div class="abs_l">
        <a href="javascript:;" class="msg-box" @click="pupshow">
          <div class="circle"></div>
        </a>
      </div>
      <div class="abs_r">
        <a href="https://m.toutiao.com/search/?need_open_window=1" class="btn search" v-if="true"></a>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      bool: 1
    };
  },

  methods: {
    pupshow() {
      //   console.log(111);
      this.$emit("info", this.bool);
    }
  }
};
</script>
