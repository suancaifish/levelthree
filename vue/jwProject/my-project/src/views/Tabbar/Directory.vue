<template>
  <div id="box">
    <van-nav-bar left-text left-arrow :z-index="4" :border="false" :fixed="true">
      <van-icon slot="right" name="arrow-left" />
    </van-nav-bar>
    <!-- 搜索框 -->
    <van-search placeholder="搜索你感兴趣的商品" v-model="value" :style="stylesearch" @click="onfocus" />

    <!-- 侧栏 -->
    <div class="direMain">
      <div class="fixedNav">
        <div class="left">
          <van-sidebar v-model="activeKey" :style="bottomHeight" class="ffffaaa">
            <van-sidebar-item
              v-for="(item,index) in pageNav "
              :key="index"
              :title="item.name"
              @click="tabNum(index)"
            />
          </van-sidebar>
        </div>
      </div>

      <div class="direCont">
        <!-- 分类开始 -->

        <div
          class="content"
          v-for="(item,index) in femleiConot"
          :key="index"
          v-show="index==displayNum"
        >
          <div class="fenlei-part">
            <section v-for="(value,ind) in item" :key="ind">
              <div class="fenlei-tit">{{value.name}}</div>
              <div class="fenlei-icon">
                <div class="icon-cont" v-for="(val,num) in value.item_list" :key="num">
                  <div class="icon-pic">
                    <img :src="val.pic_url" alt />
                  </div>
                  <p class="icon-tit" v-text="val.name">笔记本</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <!-- 分类结束 -->
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
      },
      femleiConot: [],
      // 点击侧脸获取index值
      displayNum: 0
    };
  },
  async created() {
    let Pages = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/Directory"
    );

    this.pageNav = Pages.data.result_rows.page_info.floor_list[0].item_list;
    // console.log(this.pageNav);

    // 分类内容

    let fenleipart = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/fenlei"
    );
    // console.log(fenleipart.data);
    this.femleiConot = fenleipart.data.data;
    // console.log(this.femleiConot);
  },
  methods: {
    tabNum(index) {
      // 点击侧脸获取index值
      // 让对应的选项卡显示
      // console.log(index);
      this.displayNum = index;
    },
    onfocus() {
      // console.log(9);
      this.$router.push("/Search");
    }
  }
};
</script>


<style scoped>
section {
  overflow: hidden;
}
.icon-cont {
  width: 1.70667rem;
  height: 2.53333rem;
  margin-right: 30px;
  float: left;
}
.icon-cont:nth-child(3n) {
  margin-right: 0px;
}
.icon-cont p {
  text-align: center;
  margin-top: 5px;
}
.icon-pic {
  box-sizing: border-box;
  padding-left: 8px;
}
.icon-pic img {
  width: 1.38667rem;
  height: 1.38667rem;
  text-align: center;
  margin: auto;
}
.fenlei-icon {
  width: 6.58667rem;
  padding-top: 0.21333rem;
  overflow: hidden;
  border-bottom: 1px solid #ededee;
}
.fenlei-part {
  width: 7.12rem;
  padding-left: 0.53333rem;
  padding-bottom: 0.21333rem;
}

.fenlei-part .fenlei-tit {
  line-height: 1.38667rem;
  color: #363c48;
  font-size: 14px;
  font-weight: 500;
}
#box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.left {
  width: 100%;
  height: 100%;
  /* background-color: #ccc; */
  overflow: auto;
}
.content {
  overflow: auto;
  height: 100%;
}
.direMain {
  flex: auto;
  display: flex;
  height: 100%;
}
.fixedNav {
  /* background-color: #ccc; */
  width: 80px;
  height: 100%;
  overflow: auto;
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
  height: 100%;

  overflow: auto;
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
