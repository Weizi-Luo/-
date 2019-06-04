// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      imgArr:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
 
      // imgArr:[
      //   "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3721233652,2698208482&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1261269011,3388789942&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=213508746,3054859891&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1977404551,2641765378&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=346425011,3999801004&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2786750365,531723976&fm=27&gp=0.jpg",
      //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=73922620,773278423&fm=27&gp=0.jpg",
      //   "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1443129697,1707941051&fm=26&gp=0.jpg",
      //   "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1967929722,1432792958&fm=26&gp=0.jpg",
        
      // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onTap(e) {
        const index = e.currentTarget.dataset.index
        console.log(index)
        wx.previewImage({
          urls:this.data.imgArr,
          current:this.data.imgArr[index]
        })
      }
  }
})
