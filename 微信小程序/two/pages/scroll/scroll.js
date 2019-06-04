// pages/scroll/scroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // listLike:{
    //   0:false,
    //   1:false,
    //   2:false,
    //   3:true
    // }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData();
    this.getLikeData();
   
  },
  onLikeTap:function(e) {
    var index = e.currentTarget.dataset.articleindex;
    var listLike = this.data.listLike;
    var isLike = listLike[index];
    // console.log(this.data)
    listLike[index] = !isLike;
    this.setData({
      listLike:listLike
    })
    // console.log(listLike);
    wx.setStorageSync('listLike', listLike)

  },
  onMoreTap:function(e) {
    var type = e.currentTarget.dataset.articletype;
    wx.showActionSheet({
      itemList:['内容过期了', '内容和' + type + '不相关', '不再显示来自' + type + '的内容'],
      success:function(e){
        
      }
    })
  },

  onArticleTypeTap: function (e) {
    // console.log(e)
    var typeId = e.currentTarget.dataset.articletype;
    // console.log(typeId)
    
    wx.navigateTo({
      
      url: '/pages/type/type?typeId=' + typeId
    })
  },

  getHomeData: function () {
    var that = this;
    wx.request({
      url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
      success:function(res) {
        console.log(res.data);
        that.setData({
          recommend:res.data.recommend,
          markType:res.data.markType,
          articleList:res.data.articleList
        })
      }
    })
  },
  getLikeData: function () {
    var listLikeStorage = wx.getStorageSync('listLike');
    if(!listLikeStorage) {
      listLikeStorage = {}
    }
    this.setData({
      listLike:listLikeStorage
    })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})