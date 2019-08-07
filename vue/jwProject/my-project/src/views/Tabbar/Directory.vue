<template>
  <div>
    <van-nav-bar left-text left-arrow :z-index="4" :border="false" :fixed="true">
      <van-icon slot="right" name="arrow-left" />
    </van-nav-bar>
    <!-- 搜索框 -->
    <van-search placeholder="搜索你感兴趣的商品" v-model="value" :style="stylesearch" />

    <!-- 侧栏 -->
    <div class="direMain">
      <div class="fixedNav">
        <van-sidebar v-model="activeKey" :style="bottomHeight" class="ffffaaa">
          <van-sidebar-item v-for="(item,index) in pageNav " :key="index" :title="item.name" />
        </van-sidebar>
      </div>

      <div class="direCont">
        <div>808908098</div>
      </div>
    </div>
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
        top: "0px",
        width: "90%",
        left: "30px",
        zIndex: "6"
      },
      pageNav: [],
      bottomHeight: {
        marginTop: "50px",
        marginBottom: "50px"
      }
    };
  },
  async created() {
    let Pages = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/Directory"
    );

    this.pageNav = Pages.data.result_rows.page_info.floor_list[0].item_list;
    console.log(this.pageNav);
  }
};
</script>


<style scoped>
.direMain {
  flex: 1;
  display: flex;
  height: 80%;
}
.fixedNav {
  display: flex;
}
.ffffaaa {
  flex: 1;
}
.direMain .direMain {
  width: 0.787037rem;
}
.direMain .direCont {
  margin-top: 50px;
  padding-bottom: 50px;

  flex: 1;
  overflow-y: scroll;
}
.aaa {
  height: 2000px;
  background-color: pink;
}
.van-nav-bar {
  height: 54px;
  line-height: 54px;
}
.van-nav-bar .van-icon {
  color: #ddd;
}
.van-sidebar-item--select {
  border-color: #407aff;
}
[class*="van-hairline"]::after {
  border: none;
}
</style>
