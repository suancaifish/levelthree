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
        <a
          href="javascript:void(0)"
          data-channel="__all__"
          data-query="channel=__all__"
          class="btn cur"
        >推荐</a>
        <a
          href="javascript:void(0)"
          data-channel="video"
          data-query="channel=video"
          class="btn"
          v-for="(item,index) in items"
        >{{item.item}}</a>
        <!--    <a
          href="javascript:void(0)"
          data-channel="news_hot"
          data-query="channel=news_hot"
          class="btn"
        >热点</a>
        <a
          href="javascript:void(0)"
          data-channel="news_society"
          data-query="channel=news_society"
          class="btn"
        >社会</a>
        <a
          href="javascript:void(0)"
          data-channel="news_entertainment"
          data-query="channel=news_entertainment"
          class="btn"
        >娱乐</a>
        <a
          href="javascript:void(0)"
          data-channel="news_military"
          data-query="channel=news_military"
          class="btn"
        >军事</a>
        <a
          href="javascript:void(0)"
          data-channel="news_tech"
          data-query="channel=news_tech"
          class="btn"
        >科技</a>
        <a
          href="javascript:void(0)"
          data-channel="news_car"
          data-query="channel=news_car"
          class="btn"
        >汽车</a>
        <a
          href="javascript:void(0)"
          data-channel="news_house"
          data-query="channel=news_house"
          class="btn"
        >房产</a>
        <a
          href="javascript:void(0)"
          data-channel="new_furnish"
          data-query="channel=new_furnish"
          class="btn"
        >家居</a>
        <a
          href="javascript:void(0)"
          data-channel="news_sports"
          data-query="channel=news_sports"
          class="btn"
        >体育</a>
        <a
          href="javascript:void(0)"
          data-channel="news_finance"
          data-query="channel=news_finance"
          class="btn"
        >财经</a>-->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        // { item: "推荐" },
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
  }
};
</script>
