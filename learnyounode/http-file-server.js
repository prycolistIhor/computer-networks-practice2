const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(filePath);

  stream.pipe(res);

  stream.on('error', (err) => {
    res.writeHead(500);
    res.end('Server Error');
  });
});

server.listen(port);
