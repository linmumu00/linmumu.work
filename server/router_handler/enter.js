// 导入数据库模块
const db = require('../db/index.js')

exports.articles = (req, res) => {

    const { email } = req.body;
    const sql = `select * from articles where email=?`
    db.query(sql, email, function (err, results) {

        // 执行 SQL 语句失败
        if (err) return res.cc(err)
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length === 0) { return res.cc('用户没有发布作品！') }
        // TODO：登录成功
        res.send({
            status: 0,
            message: "登录成功！",
            email: email,
            results: results,
        })
    })

}