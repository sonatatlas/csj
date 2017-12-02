

const Router = require('koa-router')
const offical = new Router()

const login = require(COMPONENTS + '/offical/login')

offical.post('/login',login.post)

module.exports = offical
