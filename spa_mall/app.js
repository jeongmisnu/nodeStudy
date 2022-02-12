const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods');

const requestMiddleware = (req, res, next) => {
  console.log("Request URL:", req.originalUrl, '-', new Date());
  next();
};

app.use(requestMiddleware);

app.use('/api', goodsRouter);

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌습니다!");
});


// app.use((req, res, next) => {
//   console.log("미들웨어가 구현됐나?");
//   if (req.path === "/test") {
//     res.send("테스트 주소로 왔네?")
//   }
//   next();
// });