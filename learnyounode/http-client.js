const http = require('http')

http.get(process.argv[2], (respone) => {
    respone.setEncoding('utf8')

    respone.on('data', console.log)
    respone.on('error', console.error)
}).on('error', console.error)
