module.exports = {
    development: require('./devConfig'),
    preview: require('./preConfig'),
    production: require('./prdConfig')
}[process.env.node_env || 'development']