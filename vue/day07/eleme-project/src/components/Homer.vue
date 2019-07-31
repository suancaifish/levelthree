<template>
  <div>
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div aria-label="当前地址：沙太中路竹园小区(京溪路)，轻点两下重新选择" role="button" class="index-2S5Ah_0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            />
          </svg>
          <span class="index-2uW_v_0">沙太中路竹园小区(京溪路)</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- 搜索 -->
    <van-search placeholder="请输入搜索关键词" v-model="value" background="#0085ff" />

    <!-- 宫格+轮播 -->
    <van-swipe :autoplay="1000000" indicator-color="#fe7100">
      <van-swipe-item>
        <van-grid>
          <van-grid-item
            v-for="(k,index) in kingkongListComputed"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
            v-bind:style="styleObject"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid>
          <van-grid-item
            v-for="(k,index) in kingkongListComputed2"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
            v-bind:style="styleObject"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>

    <!-- 图片+会员 -->
    <section id="activity-lego" class="index-1y1Q5_0">
      <div class="index-3xB2N_0">
        <div class="index-Q3GS5_0 index-1xT5J_0">
          <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
          <div class="index-2W67h_0">搭配齐全吃得好</div>
          <div class="index-1DFa7_0">
            <!---->
            立即抢购 &gt;
          </div>
          <img
            src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
          />
        </div>
        <!---->
      </div>
    </section>
    <!-- 会员 -->
    <div class="index-3eoZ-_0">
      <div class="index-3M-d6_0">
        <img
          alt
          class="index-1QvOZ_0"
          src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/"
        />
        <span class="index-M9mXY_0">超级会员</span>
        <span class="index-tO6Fz_0">
          <b></b>每月领20元红包
        </span>
      </div>
      <a href="javascript:" ubt-click="101933" ubt-data-type="1" class="index-1-R5E_0">
        <b class="index-4F0aw_0"></b>立即开通
      </a>
    </div>

    <!-- 分割线 -->
    <div>
      <van-divider>商家推荐</van-divider>
    </div>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="menu|newMenu" />
      <van-dropdown-item title="品质联盟" disabled />
      <van-dropdown-item title="距离最近" disabled />
      <van-dropdown-item title="筛选" disabled />
    </van-dropdown-menu>

    <!-- 列表页 -->
    <section class="shoplist" v-for="(g,index) in goods" :key="index">
      <section class="index-container_10L_lQb shop-0">
        <div class="index-shopInfo_1RRTZ0d">
          <div class="logo-container_XoH2Vit_0">
            <div class="logo-main_21aInWJ_0">
              <img
                alt="叫个飞的鲍汁黄焖鸡（元岗北街店）"
                class="logo-logo_3S1eSkn_0"
                :src="g.restaurant.image_path"
              />
              <!---->
              <!---->
            </div>
            <div class="logo-newShop_PI2TWde_0">
              <span>新店</span>
            </div>
          </div>
          <div class="index-main_N3FfcSz">
            <section class="index-line_2-iYR1A">
              <h3 class="index-shopname_39Y7e3U">
                <!---->
                <span v-text="g.restaurant.name"></span>
              </h3>
              <ul class="index-supportWrap_2lTcxr2">
                <!---->
                <span class="index-omit_1q3Tw0_">···</span>
              </ul>
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-rateWrap_39dWx_g">
                <div class="Rating-wrapper_TYbDrku_0 index-stars_vPkk9Vv">
                  <div class="Rating-gray_1kpffd5_0">
                    <img src />
                  </div>
                  <div class="Rating-actived_GBtiHkB_0" style="width: 98%;">
                    <img src />
                  </div>
                </div>
                <span class="index-rate_WsK58g8">4.9</span>
                <span>月售128单</span>
              </div>
              <!---->
            </section>
            <section class="index-line_2-iYR1A">
              <div class="index-moneylimit_2fCq9W5">
                <span>¥20起送</span>
                <span>夜间配送费¥3.5</span>
                <!---->
              </div>
              <div class="index-timedistanceWrap_2Dp_kzY">
                <span class="index-distanceWrap_1EPAlti">1.16km</span>
                <span>27分钟</span>
              </div>
            </section>
          </div>
        </div>
        <div class="index-activityWrap_3mo1GyG">
          <!---->
          <section class="index-tagLine_1rJw_lq">
            <!---->
            <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
              盖浇饭
              <span
                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                style="color: rgb(102, 102, 102); border-color: rgb(221, 221, 221);"
              >盖浇饭</span>
            </span>
            <span class="mini-tag-tag_3Tm_6bw_0 index-tag_3oprLi5">
              品质联盟
              <span
                class="index-tagGhost_1KCu_KY mini-tag-ghost_3DwLU8E_0"
                style="color: rgb(51, 51, 51); border-color: rgb(221, 221, 221);"
              >品质联盟</span>
            </span>
            <!---->
          </section>
          <span>
            <img src />
          </span>
          <section class="index-activities_25AUDsx">
            <div class="index-activityList_1wvwwUY">
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(240, 115, 115);">减</span>
                </span>
                <span class="index-desc_JLha7Vr" v-text="g.restaurant.activities[0].description"></span>
              </div>
              <div class="index-actRow_2f_uNNA">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(241, 136, 79);">换</span>
                </span>
                <span class="index-desc_JLha7Vr" v-text="g.restaurant.activities[0].name">特价商品1.8元起</span>
              </div>
              <div class="index-actRow_2f_uNNA" style="display: none;">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(112, 188, 70);">首</span>
                </span>
                <span class="index-desc_JLha7Vr">新用户下单立减17元</span>
              </div>
              <div class="index-actRow_2f_uNNA" style="display: none;">
                <span class="index-iconWrap_1xJuKaY">
                  <span class="index-icon_1fBCxBk" style="background-color: rgb(0, 183, 98);">新</span>
                </span>
                <span class="index-desc_JLha7Vr">本店新用户立减1元</span>
              </div>
            </div>
            <div class="index-activityBtn_tMk-e1C">
              <span>4个活动</span>
              <img src class />
            </div>
          </section>
        </div>
        <!---->
      </section>
    </section>

    <!-- 标签栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o">订单</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      kingkongList: [],
      girdlist: [],
      styleObject: {
        flexBasis: "20%"
      },
      value1: 0,
      menu: [],
      goods: [],
      active: 0
    };
  },
  methods: {},
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 10);
    },
    kingkongListComputed2() {
      return this.kingkongList.slice(10, -1);
    }
  },
  async created() {
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d40113ccf75387cbda8c48b/example/listnav"
    );

    this.kingkongList = kingkongList.data.data;

    // 获取下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d402d6799acfe0359e0189d/main/paixu"
    );
    this.menu = menu.data.outside.inside_sort_filter;

    let goods = await this.$axios(
      "https://www.easy-mock.com/mock/5d402d6799acfe0359e0189d/main/goods"
    );
    this.goods = goods.data.items;
  },
  filters: {
    newMenu(menu) {
      let Menu1 = [];
      menu.forEach((ele, index) => {
        ele.text = ele.name;
        ele.value = index;
        Menu1.push(ele);
      });
      return Menu1;
    }
  }
};
</script>

<style>
.van-field__control {
  text-align: center;
}
.van-swipe__indicator {
  width: 20px;
  background-color: #000;
  opacity: 0.2;
  border-radius: 0;
  height: 3px;
}
.van-swipe__indicators {
  bottom: 4px;
}
.van-swipe__indicator--active {
  background-color: #fe7100;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-1qvN6_0 {
  font-size: 24px;
}
.van-cell {
  height: 45px;
  line-height: 39px;
}
.van-divider::after,
.van-divider::before {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 10%;
  height: 2px;
  background-color: #000;
}
.van-divider {
  justify-content: center;
}
</style>


