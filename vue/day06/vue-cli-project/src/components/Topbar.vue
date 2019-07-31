<template>
  <div>
    <div class="top_menu_bar">
      <div class="top_menu_more">
        <div class="list_shadow"></div>
        <a class="more_btn" href="javascript:void(0)">
          <span class="cross"></span>
        </a>
      </div>
      <div class="top_menu_list">
        <!-- <a
          href="javascript:void(0)"
          data-channel="__all__"
          data-query="channel=__all__"
          class="btn cur"
        >推荐</a>-->
        <a
          href="javascript:void(0)"
          data-channel="video"
          data-query="channel=video"
          class="btn"
          @click="tab(index)"
          v-for="(item,index) in items"
          :class="{cur : index===curId}"
        >{{item.item}}</a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      curId: 0,
      items: [
        { item: "推荐" },
        { item: "视频" },
        { item: "热点" },
        { item: "社会" },
        { item: "娱乐" },
        { item: "军事" },
        { item: "科技" },
        { item: "汽车" },
        { item: "房产" },
        { item: "家具" },
        { item: "体育" },
        { item: "财经" }
      ]
    };
  },
  methods: {
    tab(index) {
      //令当前index等于高亮curid，
      this.curId = index;
    }
  }
};
</script>
