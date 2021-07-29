const http = require('http')
const fs = require('fs').promises;
const url = require('url');
const qs = require("querystring");

// 문자인 쿠키를 객체로 바꿔주는 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie) //{mycookie:'test}
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    if (query === 'jaesoek') {
      return res.end('Hi jaesoek');
    }
  }
})
  .listen(5000, () => {
    console.log('5000 Port Working')
  })