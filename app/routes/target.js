const Router = require('koa-router');

let router = new Router()
    .get('target', async ctx => {
        ctx.body = 'API IS OK!';
    })

module.exports = router;