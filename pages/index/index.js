// pages/newYear2/newYear2.js

var fall = require('../../utils/fall.js');
const W = wx.getSystemInfoSync().windowWidth;
const H = wx.getSystemInfoSync().windowHeight;
const newYearImgs = ['/resource/imgs/4.png','/resource/imgs/2.png','/resource/imgs/1.png','/resource/imgs/3.png','/resource/imgs/4.png','/resource/imgs/5.png'];
Page({
  

  onReady: function (e) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },
  data: {
    src: 'http://r4cwws496.hn-bkt.clouddn.com/xd.aac',
    canvasHeight: 0
    
  },
  //点透canvas   pointer-events: none;
  handleTap(){
    console.log('点透canvas');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
    let ctx = wx.createCanvasContext('myCanvas');
    fall(ctx, W, H, newYearImgs, {
      // duration: 15,
      G: 2
    });
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
    this.setData({
      canvasHeight: H
    });
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

  },

})