// 导入数据库模块
const db = require('../db/index.js')

exports.token = (req, res) => {

    const { password, email } = req.user;

    const sql = `select * from test where email=?`
    db.query(sql, email, function (err, results) {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length !== 1) { return res.cc('登录失败，无此用户！') }
        // 如果对比的结果等于 false, 则证明用户输入的密码错误
        if (results[0].password !== password) {
            return res.cc('登录失败,token失效,重新登录!')
        }
        // TODO：登录成功
        res.send({
            status: 0,
            message: "登录成功！",
            email: email,
        })
    })

}