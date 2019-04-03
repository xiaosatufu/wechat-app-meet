// components/search/index.js
import {
  KeywordModel
} from '../../models/keyword.js'
import {
  BookModel
} from '../../models/book.js'

const bookModel = new BookModel()
const keywordModel = new KeywordModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:{
      type:String,
      observer:'_load_more'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    dataArray: [],
    searching: false,
    loading:false
  },

  attached() {
    const hotWords = keywordModel.getHot()
    const historyWords = keywordModel.getHistory()
    this.setData({
      historyWords
    })
    hotWords.then((res) => {
      // console.log(res)
      this.setData({
        hotWords: res.hot
      })
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _load_more() {
      if(!this.data.q) {
        return
      }

      if(this.data.loading) return

      const length = this.data.dataArray.length
      this.data.loading = true
      bookModel.search(length,this.data.q,(res)=>{
        const tempArray = this.data.dataArray.concat(res.books)
        this.setData({
          dataArray:tempArray,
          loading:false
        })
      })

    },
    onCancel(e) {
      this.triggerEvent('cancel', {

      }, {})
    },
    onConfirm(e) {
      this.setData({
        searching: true
      })
      const q = e.detail.value || e.detail.text
      if (!q) return;
      bookModel.search(0, q, (res) => {
        keywordModel.addToHistory(q)
        this.setData({
          dataArray: res.books,
          q
        })
      })
    },
    onDelete(e) {
      this.setData({
        searching: false
      })
    }
  }
})