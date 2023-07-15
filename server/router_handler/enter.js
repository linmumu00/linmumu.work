// 导入数据库模块
const db = require('../db/index.js')

exports.articles = (req, res) => {

    const { email } = req.body;
    const sql = `select * from articles where email=?`
    db.query(sql, email, function (err, results) {

        // 执行 SQL 语句失败
        if (err) return res.send({
            status: 1,
            message: "出错了",
            email: email,
            results: [],
        })
        // 执行 SQL 语句成功，但是查询到数据条数不等于 1
        if (results.length === 0) {
            return res.send({
                status: 1,
                message: "用户没有发布过文章",
                email: email,
                results: [],
            })//当结果为0的时候也要把result传回去，不然前端无法判断
        }
        // TODO：登录成功
        res.send({
            status: 0,
            message: "登录成功！",
            email: email,
            results: results,
        })
    })

}