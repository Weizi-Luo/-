// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      magazineTypeArr:['轻芒','兴趣','物质','世界','新事','灵魂'],
      magazineIndex:0,
      activeId:'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {

      // 记录上次的索引值,避免重复加载数据
      const lastIndex = this.data.magazineIndex
      const index = e.currentTarget.dataset.index
      // console.log(e.currentTarget)
      this.setData({
        magazineIndex:index,
        activeId:`magazine${index == 0 ? 0 : index - 1}`
      })

      if(lastIndex == index) {
        return
      }
      this.triggerEvent("nav", {
        index:index
      })
    }
  }
})
