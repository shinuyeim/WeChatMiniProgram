// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  clickMe: function () {
    this.setData({
      msg: "Hello World"
    })
  },
  sendRequest: function () {
    wx.request({
      url: getApp().globalData.server + '/customers',
      data: {
        name: "shinuye",
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
      }
    })
  }
})