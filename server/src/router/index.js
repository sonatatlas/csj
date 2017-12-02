
//init
const Router = require('koa-router')
const offical = require('./offical')
const client = require('./client')
const business = require('./business')

const rootRouter = new Router()

rootRouter.use('/client',client.routes(),client.allowedMethods())
rootRouter.use('/offical',offical.routes(),offical.allowedMethods())
rootRouter.use('/business',business.routes(),business.allowedMethods())

module.exports = rootRouter

