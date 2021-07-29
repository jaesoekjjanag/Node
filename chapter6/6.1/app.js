//미들웨어들 cookie-parser, express-session, morgan 
const express = require('express');
const path = require('path');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const dotenv = require('dotenv')
//process.env를 관리하기 위한 패키지, .env(dotenv) 파일을 읽어서 process.env로 만듬
//비밀 키들은 주로 process.env에 보관하여 보안, 편의성 확보, dotenv로 로딩

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다.');
  next()
})

app.get('/', (req, res, next) => {
  console.log('GET 요청에서 실행됩니다.')
  next();
}, (req, res) => {
  throw new Error('에러는 에러처리 미들웨어로 갑니다.')
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message)
})

app.listen(app.get('port'), () => {
  console.log('서버 실행 중')
})