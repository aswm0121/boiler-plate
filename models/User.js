const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength:50
    },
    email: {
        type: String,
        trim: true, // space 없애주는 역할
        unique:1

    },
    password: {
        type: String,
        minlength: 5

    },

    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 관리자 또는 일반 유저 구분
        type: Number,
        default: 0
    },
    image: String,
    token : { // 유효성 관리
        type: String
    },
    tokenExp: { // 토큰 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
// 스키마를 모델로 감싸줌

module.exports = {User}
// 모델을 다른 파일에서 쓸 수 있게 해줌