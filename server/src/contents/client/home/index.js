//home.js

//model
const Shop = require(COMPONENTS + '/mongo').Shop

const get = async ctx=>{
    let finalRes = {}
    await Shop.find({openid:'foo'}).then((res)=>{
	finalRes = res
    })
    console.log(finalRes)
    ctx.body=finalRes
}


module.exports = {
    get
}
