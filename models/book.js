import {
  HTTP
} from '../util/http.js'
class BookModel extends HTTP {
  constructor() {
    super()
  }

  getHotList(success) {
    var params = {
      url: 'book/hot_list',
      success: success
    }
    this.request(params)
  }

  getDetail(bid, success) {
    let params = {
      url: 'book/' + bid + '/detail',
      success: success
    }
    this.request(params)
  }

  getLikeStatus(bid, success) {
    let params = {
      url: '/book/' + bid + '/favor',
      success: success
    }
    this.request(params)
  }
  getComment(bid, success) {
    let params = {
      url: `book/${bid}/short_comment`,
      success: success
    }
    this.request(params)
  }

  postComment(bid, comment, success) {
    let params = {
      method: 'POST',
      url: 'book/add/short_comment',
      data: {
        book_id: bid,
        content: comment,
      },
      success: success
    }
    console.log(params)
    this.request(params)
  }

  getMyBookCount(success) {
    let params = {
      url: '/book/favor/count',
      success: success
    }
    this.request(params)
  }
  search(start, q,success) {
    let params = {
      url: 'book/search?summary=1',
      success:success,
      data: {
        q: q,
        start: start
      }
    }
    this.request(params)
  }
}

export {
  BookModel
}