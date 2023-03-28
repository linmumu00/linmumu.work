//导入express
const express = require('express')
//创建服务器的实例对象
const app = express()

//导入并配置cors中间件
const cors = require('cors')
app.use(cors())

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))
// app.use(express.json())


//优化send的处理函数中间件,一定要在路由导入前
app.use((req, res, next) => {
    res.cc = function (err, status = 1) {
        res.json({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

const joi = require('joi')
// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
})

//// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))


//导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 错误中间件
app.use(function (err, req, res, next) {
    //验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误...
    res.cc(err)
})


//启动服务器
app.listen(3007, () => {
    console.log('welcome http://127.0.0.1:3007')
})