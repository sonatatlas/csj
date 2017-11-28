//login.js

const app = getApp()

const setUserInfo = (that)=>{
  if (app.globalData.userInfo) {
    that.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  } else if (that.data.canIUse) {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    app.userInfoReadyCallback = res => {
      that.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
  } else {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
}

module.exports=setUserInfo