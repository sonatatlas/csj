//login.js

const Shop = require('../../mongo').Shop

const post =async ctx=>{
    let body = ctx.request.body
    console.log(body)
    let docs = await Shop.findOne({"owner.account": body.account})
    if(docs && body.password === docs.owner.password){
	console.log(docs)
	ctx.body = { verify : true }
    }else{
	ctx.body = { verify : false }
    }
	
}

module.exports={
    post
}
