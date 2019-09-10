// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 宫格
    grids: [],
    goods:[],
    count:0
   
  },
 getgoods(){//获取商品信息
   let _this = this
   wx.request({
     url: 'https://www.easy-mock.com/mock/5d402d6799acfe0359e0189d/main/goods',
     header: {
       'content-type': 'application/json' // 默认值
     },
     success({data}) {
       console.log(data.items)
       _this.setData({
         goods: [..._this.data.goods, ...data.items]
       })
     }
   })
 }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d6520a0c5c10b3c6a587571/eleme/frid', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success({data}) {
        console.log(data.gird)
        _this.setData({
          grids: data.gird
        })
      }
    })
    this.getgoods();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  // console.log(1)
  //最多加载3次列表
  this.data.count++
  //下拉加载
    if(this.data.count<5){
      this.getgoods();
    }else{
      wx.showToast({
        title: '数据已经加载完……',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})