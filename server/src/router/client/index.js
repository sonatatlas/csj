//client router

const Router = require('koa-router')


const offical = new Router()



const login = require(COMPONENTS + '/client/login')
const home = require(CONTENTS + '/client/home')


offical.get('/login',login.get)
offical.get('/home',home.get)



module.exports= offical
