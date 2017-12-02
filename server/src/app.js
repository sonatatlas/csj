/*
 *app
 *
 */

//global
global.COMPONENTS = __dirname + '/components'
global.CONTENTS = __dirname + '/contents'
global.URL = 'http://localhost:3000/'

//module
const Koa = require('koa')
const log = require('koa-logger')
const body = require('koa-bodyparser')
const serve = require('koa-static')
const onerror = require('koa-onerror')
const router = require('./router')
const cors = require('@koa/cors')
const session = require('koa-session')
const app = new Koa()

//mid-ware
app.use(log())
app.use(body({multipart: true}))
app.use(cors())
app.use(serve('public'))
app.use(router.routes()).use(router.allowedMethods())

onerror(app)
app.use(session(app))

module.exports = app
