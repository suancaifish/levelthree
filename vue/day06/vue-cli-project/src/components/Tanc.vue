<template>
  <div>
    <div data-reactroot id="pageletPopupBanner" class="tt-modal">
      <div class="popup">
        <div class="banner"></div>
        <p>已加载好您感兴趣的头条</p>
        <div class="download-btn" data-node="downloadBtn">立即打开</div>
        <div class="close" data-node="close" @click="close"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bool: 0
    };
  },
  methods: {
    close() {
      this.$emit("clinfo", this.bool);
    }
  }
};
</script>
