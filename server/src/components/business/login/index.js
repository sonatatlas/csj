//login.js

const Account = require('../../mongo').Account

const post =async ctx=>{
    let body = ctx.request.body
    let docs = await Account.findOne({tel: body.tel})
    if(body.psw === docs.psw){
	ctx.body = { verify : true }
    }else{
	ctx.body = { verify : false }
    }
	
}

module.exports={
    post
}
