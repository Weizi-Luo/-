// components/bigImg/cmp.js

import {Beh} from '../behaviors/my-behavior.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[Beh],
  properties: {
      // imgSrc:{
      //   // 什么类型
      //   type:String,
      //   value:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554009699076&di=bc1a799a33435fc327698e7499dfa0f7&imgtype=0&src=http%3A%2F%2Fimgm.gmw.cn%2Fattachement%2Fjpg%2Fsite2%2F20170629%2Ff44d30758ab01abe846262.jpg',
      //   observer:function(newVal, oldVal, changePath) {
      //     console.log(newVal, oldVal, changePath)
      //   }
      // },
      // mainTitle: {
      //   type:String,
      //   value:'啊',
      //   observer:function () {}
      // }
  },

  /**
   * 组件的初始数据
   */
  data: {
      src:"",
      title:'穿上这个夹克,我可以飞起来!'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
