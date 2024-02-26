const express = require('express')
// express 모듈 가져옴
const app = express()
// function이용해서 새로운 express app을 만듬

const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sangwoo:aswm0121!@cluster0.2mcp4ct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
 useNewUrlParser: true, useUnifiedTopology:true
//  useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
}) // /에 오면 hello world 뜨게 해줌

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// npm start하면 node의 index.js를 실행
//Mongoose -> 몽고db 쉽게 쓸 수 있도록 해주는 도구