const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const payment =  () => {
    let openid = wx.getStorageSync('openid')
    let url = app.globalData.url
    console.log(openid)
    let timeStamp = Date.now().toString()
    let No = 'N' + timeStamp
    wx.request({
      url: url + '/test',
      method: 'POST',
      data: {
        bookingNo: No,  /*订单号*/
        total_fee: 1,   /*订单金额*/
        openid: openid,
        timeStamp: timeStamp,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.requestPayment({
          'timeStamp': timeStamp,
          'nonceStr': 'nonceStr',
          'package': 'prepay_id=' + res.data.prepay_id,
          'signType': 'MD5',
          'paySign': res.data._paySignjs,
          'success': function (res) {
            console.log(res);
          },
          'fail': function (res) {
            console.log('fail:' + JSON.stringify(res));
          }
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
module.exports = {
  formatTime: formatTime
}
