// mongoose 모듈 생성
const mongoose = require('mongoose');

// schema 생성
const userSchema = mongoose.Schema({
    // 필드 작성
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: Strying,
        trim: true,         // space 없애주는 역할
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        // 관리자 또는 일반 user
        type: Number,
        default: 0      // 기본값은 0 -> 일반 유저
    },
    image: String,      // object안해도 가능
    token: {
        // token : 유효성 관리
        type: String
    },
    tokenExp: {
        // token 유효기간
        type: Number
    } 
})


// schema 모델로 감싸기
const User = mongoose.model('User', userSchema)


// 모듈 다른곳에서도 사용 가능 
module.export = {User}