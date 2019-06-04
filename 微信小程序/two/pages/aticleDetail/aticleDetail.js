// pages/aticleDetail/aticleDetail.js

var request = require('../../tools/request.js')
var audio = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleDetail:{},
    danmuList:[
      {
        text:'杉杉最美',
        color:'#51c332',
        time:12
      }
    ],
    videoCoverHidden:true ,
    palying:false,
    audioCurTime:0,
    progressPercent:0,
    progressWidth:520,
    progressCircleOrigionX:0,
    getAudioOrigionFlag:false
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.getData(options.id)
  },
  
  getData: function (id) {
    var that = this;
    request({
      url: '/getArticleDetail/' + id,
      success: function (res) {
        console.log(res)
        that.setData({
          articleDetail: res
        })
      }
     })
  },

  onVideoTap: function () {
    this.setData({
      videoCoverHidden:false
    })
    var myVideo = wx.createVideoContext('myVideo');
    myVideo.play()

  },
  audioPlay:function () {
    audio.title = '许巍'
    audio.src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    this.listenAudioPlay();
    this.updateAudioData();
  },

  onAudioPlayTap:function () {
    // var audio = wx.getBackgroundAudioManager()
    // audio.src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
    // audio.title = '许巍'
    // this.setData({
    //   playing:!this.data.playing
    // })
    var playing = this.data.playing;
    if(playing) {
      audio.pause()
    }else{
      this.audioPlay()
    }
    this.setData({
      playing:!playing
    })
  },

  listenAudioPlay:function() {
    var that = this;
    audio.onPause(function() {
      that.setData({
        playing:false
      })
    })

    audio.onStop(function () {
      that.setData({
        playing:false
      })
    })

    audio.onEnded(function () {
      that.setData({
        palying:false
        })
    })

    audio.onPlay(function () {
      that.setData({
        playing:true
      })
    })
  },

  updateAudioData:function () {
    var that = this
    var audioDuration = that.data.articleDetail.audio.duration

    audio.onTimeUpdate(function () {
      var audioCurTime = audio.currentTime.toFixed()
      var percent = audioCurTime / audioDuration
      var progressPercent = percent * 100
      var progressCircleLeft = percent * that.data.progressWidth

      that.setData({
        audioCurTime:audioCurTime,
        progressPercent:progressPercent,
        progressCircleLeft: progressCircleLeft
      })
    })
  },

  onAudioCircleStart:function (e) {
    // console.log(e)
    // px - rpx
    var audioCircleOrigionX = e.touches[0].pageX * this.getPhoneRadio()
    //  加锁操作
    var getAudioOrigionFlag
    if( !this.data.getAudioOrigionFlag ) {
      this.setData({
        audioCircleOrigionX:audioCircleOrigionX,
        getAudioOrigionFlag:true
    })
    
    }
  },

  // 运动
  onAudioCircleMove:function (e) {
    var audioCircleOrigionX = this.data.audioCircleOrigionX
    var audioCircleMoveX = e.touches[0].pageX * this.getPhoneRadio()
    var progressCircleLeft = audioCircleMoveX - audioCircleOrigionX
    if(progressCircleLeft <= 0) {
      progressCircleLeft = 0
    } else if (progressCircleLeft >= this.data.progressWidth) {
      progressCircleLeft = this.data.progressWidth
    }
    // 进度条跟着圆点改变
    var progressPercent = progressCircleLeft / this.data.progressWidth * 100
    console.log(progressCircleLeft)
    console.log(progressPercent)
    var audioCurTime = ( progressCircleLeft / this.data.progressWidth * this.data.articleDetail.audio.duration ).toFixed()
      this.audioPlay()  
      console.log(audioCurTime)
    // 改变了圆点后音频也同时需跳转到指定位置
    audio.seek(Number(audioCurTime))

    this.setData({
      progressCircleLeft:progressCircleLeft,
      progressPercent:progressPercent,
      audioCurTime:audioCurTime
    })
  },

  getPhoneRadio:function () {
    var radio = 0;
    wx.getSystemInfo({
      success:function (res) {
        var width = res.screenWidth
        radio = 750 / width
      }
    })
    return radio
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