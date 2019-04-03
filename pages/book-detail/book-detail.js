// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book.js'
import {
  LikeModel
} from '../../models/like.js'
let bookModel = new BookModel()
let likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.showLoading()
    const bid = options.bid
    // console.log(options)
    bookModel.getComment(bid, (res) => {
      console.log(res.comments)
      this.setData({
        comments: res.comments
      })

    })
    bookModel.getDetail(bid, (res) => {
      this.setData({
        book: res
      })
      console.log(res)

    })
    bookModel.getLikeStatus(bid, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums
      })
      // console.log(res)

    })
  },

  onLike(e) {
    const like_or_cancel = e.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },

  onFakePost() {
    this.setData({
      posting: true
    })
  },
  onCancel() {
    this.setData({
      posting: false
    })
  },
  onPost(e){
    // console.log(e)
    const comment = e.detail.text || e.detail.value
    // const commentInput = e.detail.value
    if(!comment) return
    if(comment.length>12) {
      wx.showToast({
        title: '短评最多12个字',
        icon:"none"
      })
      return
    }

    bookModel.postComment(this.data.book.id,comment,(res)=>{
      // console.log(res)
      wx.showToast({
        title:'+1',
        icon:'none'
      })
      this.data.comments.unshift({
        content:comment,
        nums:1
      })

      this.setData({
        comments:this.data.comments,
        posting:false
      })

    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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