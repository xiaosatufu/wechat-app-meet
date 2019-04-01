import {
  config
} from '../config.js'

const tips = {
  1:'错误',
  1005:'appkey 无效',
  3000:'期刊不存在'
}

class HTTP {
  request(params) {
    // url,data,method
    if (!params.method) params.method = 'GET'
    wx.request({
      url: config.api_base_api + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        //startsWith endsWith
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } else {
          // params.success(res.data)
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: (err) => {
        this._show_error()
      }
    })
  }

  _show_error(error_code) {
    wx.showToast({
      title: tips[error_code] || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}


export {
  HTTP
}