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
<<<<<<< HEAD
      type:Number
=======
      type:Number,
      value:0
>>>>>>> 49851f8ec406b8be939b8c2a99074504088e00f2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
<<<<<<< HEAD
=======
    // like:false,
    // count1:11,
    // count2:22,
>>>>>>> 49851f8ec406b8be939b8c2a99074504088e00f2
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
<<<<<<< HEAD
      console.log(e)
      let like = this.properties.like
      let count = this.properties.count

      count = like?count-1:count+1
      this.setData({
        like:!like,
        count:count
      })

=======
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

>>>>>>> 49851f8ec406b8be939b8c2a99074504088e00f2
    }
  }
})
