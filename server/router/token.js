const express = require('express')
const router = express.Router()

const token_Handler = require('../router_handler/token')

//// 导入配置文件
const config = require('../config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
// app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
const jwtMiddleware = expressJWT({ secret: config.jwtSecretKey })

// token登录
router.post('/token', jwtMiddleware, token_Handler.token)

module.exports = router