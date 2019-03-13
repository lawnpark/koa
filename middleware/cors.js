const GetIpAdress = require('../utils/getIpAdress')
module.exports = () => {
    return (ctx, next) => {
        // const HOST = ctx.request.header.host.split(':')[0]
        // if (HOST === 'localhost' || HOST === '127.0.0.1') {
        //     ctx.set('Access-Control-Allow-Origin', '*')
        // } else {
        //     ctx.set('Access-Control-Allow-Origin', '*')
        // }
        ctx.logger(111)
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
        ctx.set('Access-Control-Allow-Credentials', true)
        return next()
    }
}