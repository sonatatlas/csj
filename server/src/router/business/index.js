
//business router
const Router = require('koa-router')
const business = new Router()

const login = require(COMPONENTS + '/business/login')
const items = require(COMPONENTS + '/business/items')
const categories = require(COMPONENTS + '/business/categories')


business.post('/login', login.post)

business.get('/categories', categories.get)
business.post('/categories', categories.post)

business.get('/items', items.get)
business.post('/items', items.post)


module.exports= business
