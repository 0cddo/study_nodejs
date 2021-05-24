const express = require('express');
const app = express();
const port = 5000;   // 아무렇게나 해도 됨

// 설치한 body-parser 가져옴
const bodyParser = require('body-parser');

// config key 가져옴
const config = require('./config/key');

// User model 가져옴
const { User } = require("./models/User");


// body-parser 옵션주기
// application/x-www-form-urlencoded 데이터 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

// application/json 타입으로 된 데이터 분석해서 가져옴
app.use(bodyParser.json());


// mongoose이용하여 애플리케이션과 mongodb 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

 
   

app.get('/', (req, res) => {
  res.send('Hello World! node 시작! nodemon 설치! 서버 끌 필요없이 실행')      // root 디렉토리에서 메시지 출력
})



// 회원가입을 위한 route
// post 메소드 이용
// router end point -> /register
// callback function -> (req, res) => {         }

app.post('/register', (req, res) => {        

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다
    // User model을 가져옴 -> 인스턴스 생성
/* 
    {
        //req.body 안에 있는 것
        //json 형태 
        // body-parser 있기 때문 가능 (클라이언트에서 보내는 정보 받음)
        id: "hello",
        password: "abc123"
    } */

    const user = new User(req.body);     // 정보 넣기

    user.save((/* callback function */ err, userInfo) => {   // .save -> mongodb 메소드      // 정보들 user 모델에 저장
        // 저장 시 error 있는 경우 error json 형식으로 전달
        if (err) return res.json({ success: false, err });

        // 성공     
        return res.status(200).json({        // status(200) -> 성공
            success: true
        })      
    })           
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})      // port 5000에서 실행

