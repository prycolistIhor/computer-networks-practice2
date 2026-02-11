const net = require('net')

const server = net.createServer((socket) => {
    const now = new Date()

    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')

    const formatted = `${year}-${month}-${day} ${hours}:${minutes}`

    socket.end(`${formatted}\n`)
})

const HOST = 'localhost'
const PORT = process.argv[2]

server.listen(PORT, HOST, () => {console.log(server.address().address)})

