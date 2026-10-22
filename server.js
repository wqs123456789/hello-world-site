const http = require('node:http');
const { renderPage } = require('./lib/page');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(renderPage());
});

server.listen(port, () => {
  console.log(`Hello World site running at http://localhost:${port}`);
});
