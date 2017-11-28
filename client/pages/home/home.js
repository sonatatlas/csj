// pages/home/home.js

//modules
const setUserInfo = require('../../utils/login.js')

//main
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo: false,
    shopInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    setUserInfo(that)
    wx.request({
      url: "http://localhost:3000/home",
      method: "GET",
      success: (res)=>{
        that.setData({shopInfo:res.data[0]})
        console.log(that.data.shopInfo)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getShopInfo: function (e) {
    const openid = wx.getStorageSync('openid')
    wx.request({
      method:'GET',
      url: app.globalData.url+"/home?openid="+openid,
      success: (res)=>{
        console.log(res)
      }
    })
  }
})