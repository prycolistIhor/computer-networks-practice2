const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method != 'POST') {
    return res.end('Only POST methods');
  }

  req.setEncoding('utf8');

  req.on('data', (chunk) => {
    res.write(chunk.toUpperCase());
  });

  req.on('end', () => {
    res.end();
  });

  req.on('error', (err) => {
    console.error(err);
    res.writeHead(500);
    res.end('Server Error');
  });
});

server.listen(port);
