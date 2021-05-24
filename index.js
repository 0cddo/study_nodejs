const express = require('express')
const app = express()
const port = 5000   // 아무렇게나 해도 됨

// mongoose이용하여 애플리케이션과 mongodb 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://0cddo:40861416@boiler-plate.pirzl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

  
app.get('/', (req, res) => {
  res.send('Hello World! node 시작!')      // root 디렉토리에서 메시지 출력
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})      // port 5000에서 실행

