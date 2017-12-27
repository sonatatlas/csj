
//business router
const Router = require('koa-router')
const business = new Router()

const login = require(COMPONENTS+'/business/login')


business.post('/login',login.post)



module.exports= business
