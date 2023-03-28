/**
* 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
*/
//导入数据库模块
const db = require('../db/index.js')
//导入bcrypt 用来加密
const bcrypt = require('bcryptjs')
//用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
//导入全局的配置文件
const config = require('../config')

// 注册用户的处理函数
exports.regUser = (req, res) => {
    const userinfo = req.body
    // if (!userinfo.email || !userinfo.password)
    //     return res.send({
    //         status: 1,
    //         message: "用户名或密码不能为空"
    //     })
    // return res.cc("用户名或密码不能为空")
    //定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from test where email=?'
    db.query(sqlStr, [userinfo.email], (err, results) => {
        if (err) {
            // return res.send({
            //     status: 1,
            //     message: err.message
            // })
            return res.cc(err)
        }
        if (results.length > 0) {
            // return res.send({
            //     status: 1,
            //     message: '用户名被占用了'
            // })
            return res.cc('用户名被占用了')
        }
    })
    //加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)

    //插入新用户
    const sql = 'insert into test set ?'
    db.query(sql, { email: userinfo.email, password: userinfo.password }, (err, results) => {
        if (err) {
            // return res.send({
            //     status: 1,
            //     message: err.message
            // })
            return res.cc(err)
        }
        if (results.affectedRows !== 1) {
            // return res.send({
            //     status: 1,
            //     message: '注册用户失败，请稍后重试'
            // })
            return res.cc('注册用户失败，请稍后重试')
        }
        return res.cc('注册成功', 0)

    })


}

// 登录的处理函数
exports.login = (req, res) => {
    //接收表单数据
    const userinfo = req.body
    //定义sql语句
    const sql = `select * from test where email=?`
    db.query(sql, userinfo.email, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) { return res.cc('登录失败，无此用户！') }
        // TODO：判断用户输入的登录密码是否和数据库中的密码一致
        // 拿着用户输入的密码,和数据库中存储的密码进行对比
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (!compareResult) {
            return res.cc('登录失败,密码错误！')
        }
        // TODO：登录成功，生成 Token 字符串
        const user = { ...results[0], password: '', user_pic: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {
            expiresIn: config.expiresIn, // token 有效期为 10 个小时
        })
        console.log(tokenStr);
        res.send({
            status: 0,
            message: "登录成功！",
            token: "Bearer" + tokenStr
        })
    })

}


