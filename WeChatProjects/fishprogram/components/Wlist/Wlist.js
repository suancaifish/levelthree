// components/Wlist/Wlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转详情页
    navToDetailPage(e) {
      console.log(e)
      wx.navigateTo({
        url: `../detail/detail?id=${e.target.id}`
      })
      console.log(e.target.id)
    }
  }
})
