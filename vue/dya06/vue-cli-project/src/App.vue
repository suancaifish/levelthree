<template>
  <div id="app">
    <Header @info="cloos" />
    <Topbar />
    <Maincont />
    <Tanc v-if="msg" @clinfo="clbtn" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Topbar from "./components/Topbar.vue";
import Maincont from "./components/Maincont.vue";
import Tanc from "./components/Tanc.vue";

export default {
  name: "app",
  data() {
    return {
      msg: 0,
      
    };
  },
  components: {
    Header,
    Topbar,
    Maincont,
    Tanc
  },
  methods: {
    cloos(res) {
      this.msg = 1;
    },
    clbtn(res) {
      this.msg = 0;
    }
  }
};
</script>


<style>
</style>
