// 환경 변수에 따라 설정 달리함

if (process.env.NODE_ENV === 'production') {
    // 환경변수 production 일 때 ./prod를 요청
    module.exports = require('./prod');
} else {
    // 환경변수 development 일 때 ./dev 요청 
    module.exports = require('./dev');
}