// pages/type/type.js

var request = require('../../tools/request.js');

Page({

  data: {
    titleInfo:{},
    articleList:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getHomeData();
    // this.getTomeData(options);

    var typeId = options.typeId;
    this.getData(typeId);
    // var that = this;
    // request({
    //   url: '/getArticleTypeTitleInfo/' + typeId,
    //   success: function (res) {
    //     that.setData({
    //       titleInfo: res
    //     })
    //   }
    // })
    
    // request({
    //   url: '/getArticleTypeList/' + typeId,
    //   success: function(res) {
    //     that.setData({
    //       articleList: res
    //     })
    //   } 
    // })
  },

  getData :function (typeId) {
    var that = this;
    request({
      url: '/getArticleTypeTitleInfo/' + typeId,
      success: function (res) {
        that.setData({
          titleInfo: res
        })
      }
    })
    
    request({
      url: '/getArticleTypeList/' + typeId,
      success: function(res) {
        that.setData({
          articleList: res
        })
      } 
    })
  },

  onTap: function (e) {
    // console.log(e)
    var id = e.currentTarget.dataset.articleid;
    // console.log(id)
      wx.navigateTo({
        url: '/pages/aticleDetail/aticleDetail?id=' + id
      })
  },

  // getTomeData:function(options) {
  //   var that = this;    
  //   var typeId = options.typeId;
  //   wx.request({
  //     url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleTypeTitleInfo/' + typeId,
  //     success:function (res) {
  //       that.setData({
  //         title:res.data.data.title,
  //         imgSrc:res.data.data.imgSrc
  //       })
  //     },
  //     fail: function () {
  //       wx.showToast({
  //         title:"请求错误",
  //         icon:"none"
  //       })
  //     }
  //   })
  // },

  // getHomeData: function () {
  //   var that = this;
  //   wx.request({
  //     url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
  //     success:function(res) {
  //       // console.log(res.data);
  //       that.setData({
  //         recommend:res.data.recommend,
  //         markType:res.data.markType,
  //         articleList:res.data.articleList
  //       })
  //     }
  //   })
  // },

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})