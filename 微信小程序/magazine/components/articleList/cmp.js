// components/articleList/cmp.js

import {IndexModel} from "../../models/index.js"
import { SearchModel } from "../../models/search.js";
const indexModel = new IndexModel()
const searchModel = new SearchModel()


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[],
      observer() {

      }
    },
    more:{
      type:String,
      value:'',
      // observer(newVal) {
      //   console.log(newVal)
      //   console.log('gai')
      // }
      // 每次触底数据发生后触发此函数 表明需加载新数据了
      observer: 'loadMore'
    },

    magazineId:{
      type:Number,
      value:0,
      observe:'hasMoreData'
    },

    word:String

  },
  


  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMoreData:false,
    type:''

  },
  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length - 1;
    let type = ''
    console.log(index)
    console.log(curPages)
    if(curPages[index].route === 'pages/search/search'){
      type = 'search'
    }else{
      type = 'index'
    }

    this.setData({
      type
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      // indexModel.getArticleList(magazineId, start).then(res=>{
      //   const combineList = this.data.articleList.concat(res)
      //   console.log(combineList)
      //   this.setData({
      //     articleList:combineList,
      //     loading:false
      //   })
      // })

      // 重新拿到顶部的数据地址进行渲染
      
      if( this._isLock() || this.data.noMoreData){
        return 
      }

      this._loadLock()
      this.getMoreData()
      
    },
    getMoreData() {
      // console.log(this.data.type)

      const start = this.data.articleList.length
      let getMore = null;
      if(this.data.type === 'search'){
        const word = this.data.word;
        console.log(this.data)
        getMore = searchModel.getSearchArticleList(word, start);
        
      }else{
        const magazineId = this.data.magazineId
        // var start = this.data.articleList.length 
        // 便于测试改变了上一行代码
        // var start = 5
          getMore = indexModel.getArticleList(magazineId, start);
  
      }
      getMore.then( res => {
        this._setMoreData(res.data.data)
        this._unLoadLock()
      })
      
    },

    hasMoreData() {
      this.setData({
        noMoreData:false
      })
    },
    _isLock() {
      return this.data.loading
    },
    _loadLock() {
      this.setData({
        loading:true
      })
    },
    _unLoadLock() {
      this.setData({
        loading:false
      })
    },
    _setMoreData(list) {
      const combineList = this.data.articleList.concat(list)
        // console.log(list)

        // 如果没有数据了的话 就不加载数据
        if(combineList.length == this.data.articleList.length){
          this.setData({
            noMoreData:true
          })
          return
        }
        this.setData({
          articleList:combineList,
          
        })
    }
  }
})
