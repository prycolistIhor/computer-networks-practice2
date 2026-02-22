const http = require('http');

const urls = process.argv.slice(2);
const results = [];
let completed = 0;

if (urls.length === 0) {
  return;
}

urls.forEach((url, index) => {
  http.get(url, (response) => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      results[index] = data;
      completed++;

      if (completed === urls.length) {
        results.forEach(result => console.log(result));
      }
    });

    response.on('error', console.error);
  }).on('error', console.error);
});
