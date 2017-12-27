//home.js

//model

const request = require('request-promise')
const post = async ctx=>{
    let body = ctx.request.body
    var bookingNo = body.bookingNo
    var total_fee = body.total_fee
    var timeStamp = body.timeStamp
    var openid = body.openid
    var title = "费用说明";
    var url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
    var formData = "<xml>";
    var appid = 'wx9e3eafdbb24f089c'
    var attach = 'attach'
    var mch_id = '1494036452'
    var nonce_str = 'nonceStr'
    var notify_url = 'http://wanxiaoo.cn'
    var spbill_create_ip = '192.168.1.1'

    var key = 'sP6NYUPfFlTwew67Y9627bObvVEIVMBg'
    var sign = await paysignjsapi(appid, attach, title, mch_id, nonce_str, notify_url, openid, bookingNo, spbill_create_ip, total_fee, 'JSAPI').toUpperCase()
    formData += "<appid><![CDATA["+ appid +"]]></appid>"; //appid
    formData += "<attach><![CDATA[" + attach + "]]></attach>";
    formData += "<body><![CDATA[" + title + "]]></body>";
    formData += "<mch_id><![CDATA[" + mch_id + "]]></mch_id>"; //商户号
    formData += "<nonce_str><![CDATA[" + nonce_str + "]]></nonce_str>";
    formData += "<notify_url><![CDATA[" +  notify_url + "]]></notify_url>";
    formData += "<openid><![CDATA[" + openid + "]]></openid>";
    formData += "<out_trade_no><![CDATA[" + bookingNo + "]]></out_trade_no>";
    formData += "<spbill_create_ip><![CDATA[" + spbill_create_ip + "]]></spbill_create_ip>";
    formData += "<total_fee><![CDATA[" + total_fee + "]]></total_fee>";
    formData += "<trade_type><![CDATA[" +"JSAPI" + "]]></trade_type>";
    formData += "<sign>" + sign + "</sign>";
    formData += "</xml>";
    var res = await request({
        url: url,
        method: 'POST',
        body: formData
    })
    console.log(res)
    var prepay_id = getXMLNodeValue('prepay_id', res.toString("utf-8"));
    var tmp = prepay_id.split('[');
    var tmp1 = tmp[2].split(']');
    //签名
    var _paySignjs = paysignjs(appid, nonce_str, 'prepay_id='+tmp1[0], 'MD5', timeStamp);
    console.log(_paySignjs)
    var o = {
        prepay_id: tmp1[0],
        _paySignjs: _paySignjs
    }
    console.log(o)
    ctx.body = o
    
    function paysignjs(appid, nonceStr, package, signType, timeStamp) {
	var ret = {
            appId: appid,
            nonceStr: nonceStr,
	    package: package,
            signType: signType,
	    timeStamp: timeStamp
	};
	var string = raw1(ret);
	string = string + '&key='+key;
	var crypto = require('crypto');
	console.log(string)
	return crypto.createHash('md5').update(string, 'utf8').digest('hex');
    };

    function raw1(args) {
	var keys = Object.keys(args);
	keys = keys.sort()
	var newArgs = {};
	keys.forEach(function(key) {
            newArgs[key] = args[key];
	});

	var string = '';
	for(var k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
	}
	string = string.substr(1);
	return string;
    };

    function paysignjsapi(appid, attach, body, mch_id, nonce_str, notify_url, openid, out_trade_no, spbill_create_ip, total_fee, trade_type) {
	var ret = {
            appid: appid,
            attach: attach,
            body: body,
            mch_id: mch_id,
            nonce_str: nonce_str,
            notify_url: notify_url,
            openid: openid,
            out_trade_no: out_trade_no,
            spbill_create_ip: spbill_create_ip,
            total_fee: total_fee,
            trade_type: trade_type
	};
	var string = raw(ret);
	string = string + '&key='+key;
	var crypto = require('crypto');
	return crypto.createHash('md5').update(string, 'utf8').digest('hex');
    };

    function raw(args) {
	var keys = Object.keys(args);
	keys = keys.sort()
	var newArgs = {};
	keys.forEach(function(key) {
            newArgs[key.toLowerCase()] = args[key];
	});

	var string = '';
	for(var k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
	}
	string = string.substr(1);
	return string;
    };

    function getXMLNodeValue(node_name, xml) {
	var tmp = xml.split("<" + node_name + ">");
	var _tmp = tmp[1].split("</" + node_name + ">");
	return _tmp[0];
    }

}


module.exports = {
    post
}
