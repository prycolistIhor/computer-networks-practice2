const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method != 'GET') {
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const iso = parsedUrl.query.iso;

  if (!iso) {
    return res.end();
  }

  const date = new Date(iso);
  let result;

  if (pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    };
  }

  if (result) {
    res.end(JSON.stringify(result));
  } else {
    res.end();
  }
});

server.listen(port);
