// pages/book/book.js
import {
  BookModel
} from '../../models/book.js'
import {
  random
} from '../../util/common.js'
let bookModel = new BookModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''

  },
  onSearching() {
    this.setData({
      searching: true
    })
  },
  onCancel() {
    this.setData({
      searching: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    bookModel.getHotList((res) => {
      console.log(res)
      // this.data.books = res
      this.setData({
        books: res
      })
    })
    // bookModel.getHotList((res)=>{
    // console.log(res)
    // })
    // const promise = new Promise((resolve,reject)=>{
    //   wx.getSystemInfo({
    //     success: function(res) {
    //       resolve(res)
    //     },
    //     fail:(error)=>{
    //       reject(error)
    //     }
    //   })
    // })

    // promise.then((res)=>{
    //   console.log(res)
    // },(error)=>{
    //   console.log(error)
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

    this.setData({
      more: random(16)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})