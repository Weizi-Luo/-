// components/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:Boolean
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
    onLike(){

      const like = !this.data.like

      // console.log(this.data)
      this.setData({
        like
      })

      // 自定义组件
      this.triggerEvent('like', {
        like
      })
    }
  }
})
