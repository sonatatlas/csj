//login.js

const Shop = require('../../mongo').Shop

const get =async ctx=>{
    let query = ctx.request.query
    let docs = await Shop.findOne({'owner.account' : query.account })
    ctx.body = docs.items
	
}

const post = async ctx => {
    let body = ctx.request.body
    console.log(body)
}

module.exports={
    get,
    post
}
