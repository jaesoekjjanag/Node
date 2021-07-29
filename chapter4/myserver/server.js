const http = require('http');
const fs = require('fs').promises

const user = {
  user1: {
    name: 'jaesoek',
    age: '24',
    sex: 'Male'
  }
};

http.createServer(async (req, res) => {
  try {
    console.log(req.method, req.url);
    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile('./server.html')
        res.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' })
        return res.end(data)
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        return res.end(data);
      } else if (req.url === '/user') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end(JSON.stringify(user));
      }
    } else if (req.method === 'POST') {
      if (req.url === '/user') {
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('POST 본문(Body)', body);
        })
      }
    }
  } catch (e) {
    console.log(e)
  }
})

  .listen(8083, () => {
    console.log('8083 포트 서버 대기 중')
  })