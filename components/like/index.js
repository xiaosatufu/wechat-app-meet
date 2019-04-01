// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // like:false,
    // count1:11,
    // count2:22,
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      let like = this.properties.like
      let count = this.properties.count

      this.setData({
        count:like?count-1:count+1,
        like:!like
      })

      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior: behavior
      },{})

    }
  }
})
