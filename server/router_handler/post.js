const db = require('../db')

exports.articles = (req, res) => {
    const { email, title, content } = req.body; // 从请求体中获取参数
    console.log(req.body, req.file);
    imageFile = req.file ? req.file.filename : ''
    const query = `INSERT INTO articles (title, content, email, imagefile) VALUES ('${title}', '${content}', '${email}', '${imageFile}')`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: '文章发布失败', error: err, status: 500 });
        } else {
            console.log('Data inserted successfully');
            res.status(200).send({ message: '文章发布成功', status: 200 });
        }
    });

}