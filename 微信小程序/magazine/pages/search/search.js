
import {searchWord, SearchModel} from "../../models/search.js"
import {random} from "../../utils/randomStr.js"
const searchModel = new SearchModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord:'',
    more:'',
    searching:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const searchWord = options.searchWord;
    // console.log(searchWord)

    this.setData({
      searchWord
    })
    this.getData( searchWord)

  },

  getData(word) {
    const getSearchRecommend = searchModel.getSearchRecommend(word);
    const getSearchArticleList = searchModel.getSearchArticleList(word);

    Promise.all([getSearchRecommend, getSearchArticleList]).then(res => {
      console.log(res[0],res[1].data.data)
      this.setData({
        tag:res[0].data.data.tag,
        recommend:res[0].data.data.recommend,
        articleList:res[1].data.data,
        searching:false
      })
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
    this.setData({
      more:random(20)
    })
    // console.log(this.data.more)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})