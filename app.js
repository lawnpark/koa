const fs = require('fs')
const Koa = require('koa')
const path = require('path')
const jwt = require('koa-jwt')
const KoaBody = require('koa-body')
const router = require('./app/routes')
const cors = require('./middleware/cors')

const app = new Koa()

if (process.env.node_env === 'prodction1') {

}
else {
    app.use((ctx, next) => {
        const start = new Date()
        return next().then(() => {
            const ms = new Date() - start
            console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
        })
    })
}

app
    .use(cors())
    .use(KoaBody())
    .use(router.routes()).use(router.allowedMethods());



app.listen(3000)

