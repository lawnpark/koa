const Router = require('koa-router');

let router = new Router()
    .get('target', async ctx => {
        ctx.logger.error('1212123')
        ctx.body = 'API IS OK!';
    })

module.exports = router;