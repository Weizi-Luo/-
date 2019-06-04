
import {LikeModel} from "../../models/like.js"
const likeModel = new LikeModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      articleDetail:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus:false
  },
  attached() {
    const articleDetail = this.data.articleDetail
    // 缓存数据内的每篇文章对应的ID
    const artId = articleDetail.artId
    const likeStatus = likeModel.getLikeStatus(artId)
    this.setData({
      likeStatus
    })
    // const likeList = wx.getStorageSync('likeList') || []
    // let likeStatus = false

    // likeList.forEach( (item, index) => {
    //   if( item.artId === artId ){
    //     likeStatus = true
    //   }
    // })
    // this.setData({
    //   likeStatus
    // })
  },


  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      // console.log(e)
      const like = e.detail.like
      
      // console.log(like)
      const articleDetail = this.data.articleDetail
    // 缓存数据内的每篇文章对应的ID
    const artId = articleDetail.artId
    // const likeList = wx.getStorageSync('likeList') || []
   
      if(like) {
        //缓存文章
        // likeList.unshift(articleDetail)
        // wx.setStorageSync('likeList', likeList)
        likeModel.addLikeList(articleDetail)
      }else{

        // let myIndex = 0
        // // 将文章从缓存中移出
        likeModel.removeLikeList(artId)

        // likeList.forEach( (item, index)  => {

        //   if( item.artId === artId ){
        //     console.log(index)
        //     myIndex = index
        //   }
        // })
        // console.log(likeList)
        // likeList.splice(myIndex,1)
        // wx.setStorageSync('likeList', likeList)

      }
    }
  }
})
