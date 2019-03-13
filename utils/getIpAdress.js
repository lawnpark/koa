class GetIpAdress {

    static getServerIp() {
        const interfaces = require('os').networkInterfaces()
        for (let devName in interfaces) {　　　　
            let iface = interfaces[devName]　　
            for (let i = 0; i < iface.length; i++) {
                if (iface[i].family === 'IPv4' && iface[i].address !== '127.0.0.1' && !iface[i].internal) {
                    return iface[i].address
                }
            }　　
        }
    }

    static getClientIp(req) {
        const forwardedIpsStr = req.header('x-forwarded-for')
        let ipAddress = null
        if (forwardedIpsStr) {  
            var forwardedIps = forwardedIpsStr.split(',')
            ipAddress = forwardedIps[0]
        }  
        if (!ipAddress) {  
            ipAddress = req.connection.remoteAddress
        }  
        console.log(ipAddress)
        return ipAddress
    }
}

module.exports = GetIpAdress