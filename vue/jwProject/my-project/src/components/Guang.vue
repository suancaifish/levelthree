<template>
  <div>
    <div class="guang">
      <p class="guang-tit">逛一逛</p>
    </div>
    <div>
      <ul class="banner-list">
        <li v-for="(value,index) in Guang" :key="index">
          <a href="###">
            <img :src="value" alt />
          </a>
        </li>
      </ul>
    </div>

    
  </div>
</template>


<script>
export default {
  data() {
    return {
      fenlei: [
        "https://cimgs1.fenqile.com/ibanner2/M00/06/1F/j6gHAFzVO5OAYpPqAAA58LXMPLs543_344x144.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/1F/j6gHAFzVO6OAcsRYAAAmMDZ0vUE118_344x144.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/00/1F/kKgHAF0tf56Af8dlAABbGvvPZew956_344x144.png",
        "https://cimgs1.fenqile.com/ibanner/M00/02/DE/wScJAFnwQ4CAY-QOAAAgHVLg4f4564_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/37/A2/jqgHAFzSgM-AFuxHAAA80CZoOuM402_344x144.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/32/53/jqgHAFvlSfiAIyh-AABUITZuoC4387_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/19/ED/jagHAFqcyVSACUy0AAAh5JrGCYA356_344x144.jpg",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/2B/jagHAFyPunuAfGW2AABFYCv6wr8954_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/97/jagHAFzmV5WARCC7AABRE06itUM487_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/00/0E/kagHAF0_rSqATjDDAAAurSl_6ok586_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/06/84/j6gHAF0bAsuAA0CyAAAsHxwNkfM779_344x144.png",
        "https://cimgs1.fenqile.com/ibanner2/M00/38/55/jagHAFy0J7-ADd82AAByqURCFEA792_344x144.png"
      ],
     
      Guang: []
    };
  },
  async created() {
    let guangYiGuang = await this.$axios(
      "https://www.easy-mock.com/mock/5d4821222727b22ba5bbfd01/fenqile/kuang"
    );

    this.Guang = guangYiGuang.data.data.fenlei;
    // console.log(this.Guang);
  }
};
</script>


<style>
.guang {
  margin-top: 0.222222rem;
  height: 1.777778rem;
  background-color: #fff;
  border-top: 10px solid #eee;
}
.guang-tit {
  margin-left: 15px;
  font-size: 16px;
  line-height: 1.777778rem;
}
.banner-list {
  padding: 0 0.333333rem 0.111111rem;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding-bottom: 0.222222rem;
}
.banner-list li {
  width: 50%;
  min-height: 1.555556rem;
  margin-bottom: 0.222222rem;
  padding: 0 0.111111rem;
  box-sizing: border-box;
}
.banner-list li a img {
  max-width: 100%;
}
</style>
