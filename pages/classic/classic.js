// pages/classic/classic.js
// import {HTTP} from '../../util/http.js'
// let http = new HTTP()
import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'
let classicModel = new ClassicModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    likeCount:0,
    likeStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    classicModel.getLatest((res) => {
      this.setData({
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  onLike(e) {
    console.log(e)
    let behavior = e.detail.behavior
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)

  },
  onNext(e) {

    this._updateClassic('next')
  },
  onPrev(e) {

    this._updateClassic('previous')


    // classicModel.getPrevious(index, (res) => {
    //   // console.log(res)
    //   this.setData({
    //     classic:res,
    //     latest:classicModel.isLatest(res.index),
    //     first:classicModel.isFirst(res.index)
    //   })
    // })
  },

  _updateClassic(nextOrPrevious) {
    let index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res) => {
      this._getLikeStatus(res.id,res.type)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },


  _getLikeStatus:function(artID,category){
    likeModel.getClassicLikeStatus(artID,category,(res)=>{
      this.setData({
        likeCount:res.fav_nums, 
        likeStatus:res.like_status
      })
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // let promise = new Promise((resolve, reject) => {
    //   wx.request({
    //     url: 'http://bl.7yue.pro/v1/classic/latest',
    //     header: {
    //       appkey: 'KOLDaSADSDLWWbF'
    //     },
    //     success: (res) => {
    //       resolve(res)
    //     }
    //   })
    // })
    // promise.then((res)=>{
    //   console.log(res)
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})