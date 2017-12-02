//login.js

//module
const config = require('./config.json')
const rp = require('request-promise')

// PUT LOGIN
let finalRes = {}
const get =async ctx=>{
    
    let [req,res] = [ctx.request,ctx.response]
    await coget(req)
    ctx.body=finalRes
}

const coget = (req)=>{
    const options = {
	url : 'https://api.weixin.qq.com/sns/jscode2session',
	method:'GET',
	qs:{
	    appid: config.appid,
	    secret: config.secret,
	    js_code: req.query.code,
	    grant_type: "authorization_code"
	}
    }
    return rp(options,(err,res,body)=>{
	finalRes = body
    })
}

module.exports={
    get
}
