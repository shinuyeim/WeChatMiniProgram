// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    //server:'http://localhost:3000/api/v1'
    //server:'http://192.168.16.178:3000/api/v1'
    server:'http://172.26.86.113:3000/api/v1'
  }
})
