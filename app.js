const Koa = require('koa')
const config = require('./config')
const KoaBody = require('koa-body')
const router = require('./app/routes')
const cors = require('./middleware/cors')

new Koa()
    .use(cors())
    .use(KoaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.system.server_port)

