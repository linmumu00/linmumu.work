//导入express
const express = require('express')
//创建服务器的实例对象
const app = express()

// 导入并配置cors中间件
const cors = require('cors')
app.use(cors())

// 设置允许跨域访问的域名
// const allowedOrigins = ['http://localhost:3000'];

// 设置响应头，允许跨域访问
// app.use((req, res, next) => {
//     const origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
//     next();
// });

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




//导入并使用路由模块
const userRouter = require('./router/user')
const enterUser = require('./router/enter')
const userToekn = require('./router/token')
const postUser = require('./router/post')
const getPhoto = require('./router/photo')
app.use('/api', userRouter)
app.use('/function', userToekn)
app.use('/user', enterUser)
app.use('/post', postUser)
app.use('/get', getPhoto)

// 错误中间件
// app.use(function (err, req, res, next) {
//     //验证失败导致的错误
//     if (err instanceof joi.ValidationError) return res.cc(err)
//     // 捕获身份认证失败的错误
//     if (err.name === 'Unauthorizedrror') return res.cc('身份认证失败！')
//     // 未知错误...
//     res.cc(err)
// })


//启动服务器
app.listen(3007, () => {
    console.log('welcome http://127.0.0.1:3007')
})