

import {SubscribeModel} from "../../models/subscribe.js"
const subscribeModel = new SubscribeModel()


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class:'common',
    myTagList:[]
  },
  attached() {
    this.judgeTag()
    // console.log('a')
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onTap() {
      // 缓存
      // 标签信息
      const mark = {          
        tag:this.properties.tag,
        tagId:this.properties.tagId
      }
      if(this.data.class === 'common') {
        

        // 接收
        const MyTagList = this.getMytagList()
        MyTagList.push(mark)

        // 存
        subscribeModel.setMyTagList(MyTagList)
      }else{
        subscribeModel.removeMyTag(mark.tagId)
      }

      this.toggleClass()
      this.triggerEvent('tap')
    },
    // 接收数据并将缓存数据放在data里
    getMytagList() {
      const myTagList = subscribeModel.getMytagList();
      this.setData({
        myTagList
      })
      return myTagList;
    },
    judgeTag() {
      const myTagList = this.getMytagList();

      myTagList.forEach((item, index) => {
        if(item.tagId === this.properties.tagId) {
          this.setData({
            class:'subscribe'
          })
        }
      })
    },
    toggleClass(){
      let className = '';
      if(this.data.class === 'common') {
        className = 'subscribe'
      }else{
        className = 'common'
      }

      this.setData({
        class:className
      })
    }
  }
})
