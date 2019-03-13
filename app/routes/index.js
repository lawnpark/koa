const Router = require('koa-router')
const target = require('./target')
const router = new Router()

router
    .use('/', target.routes(), target.allowedMethods())

module.exports = router