const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
})


const port = app.get('port')
app.listen(port, () => {
  console.log(port, '번 포트 연결 중')
})