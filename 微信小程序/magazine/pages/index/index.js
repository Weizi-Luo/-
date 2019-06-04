//index.js
//获取应用实例
import {IndexModel} from "../../models/index.js"
import {random} from "../../utils/randomStr.js"
const indexModel = new IndexModel()
// import {Request} from "../../utils/request.js"
// const request = new Request()

const app = getApp()


Page({
  data: {
    articleList:[],
    markList:[],
    recommend:{},
    getMore:'',
    magazineId:0,
    loading:true
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function (options) {
    this.getData()
    // wx.showLoading()

    // request.getData({
    //   url: '/getRecommendInfo/0'
    // }).then( res=> {
    //   console.log(res)
    // })

    // request.getData({
    //   url: '/getMarkTypeList/0'
    // }).then( res=> {
    //   console.log(res)
    // })

    // request.getData({
    //   url:'/getIndexArticleList/0/0',
    //   method:'POST',
    //   data:{
    //     name:'shan',
    //     age:18
    //   }
    // }).then( res=> {
    //   console.log(res)
    // })

 
    // indexModel.getArticleList().then( res=> {
    //   console.log(res)
    // })

    // indexModel.getMarkList().then( res=> {
    //   console.log(res)
    // })

    // indexModel.getRecommendInfo().then( res=> {
    //   console.log(res)
    // })
    // wx.showLoading()

  
    


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReachBottom() {
    // console.log('1')
    // 滑动到底部后让getMore的值发生改变  对应articleList.js
    this.setData({
      // 每个页面都会有个getMore 容易产生一样的数 导致数据没变化
      // getMore:this.data.getMore + '1'

      getMore:random(20)
    })
  },

  onCatalog() {
      wx.switchTab({
        url:"/pages/catalog/catalog"
      })
  },
  onNav(e) {
    console.log(e)
    const magazineId = e.detail.index
    this.setMagazineId(magazineId)
    this.resetData()
    this.scrollPageToTop()
    this.getData(magazineId)
  },


  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommend = indexModel.getRecommendInfo(magazineId)
    // console.log(markList)

    // 如何知道哪些数据加载过来了
    Promise.all([articleList, markList, recommend]).then(res=> {
      // console.log(res[0].data.data, res[1], res[2].data.data)
      this.setData({
        articleList:res[0].data.data,
        markList:res[1].data.data,
        recommend:res[2].data.data
      })
      // wx.hideLoading()
      this.hideLoading()
    })
  },

  hideLoading() {
    this.setData({
      loading:false
    })
  },

  //重置页面数据 跳到其他标签页时数据清空 出现灰色加载蒙版
  resetData() {
    this.setData({
      articleList:[],
      markList:[],
      recommend:{}
    })
  },

  // 切换页面后回到顶部
  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
  },
  // 设置杂志ID
  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  },




  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
