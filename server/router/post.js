const express = require('express')
const router = express.Router()

const post_Handler = require('../router_handler/post')
const multer = require('multer');


// 配置 multer 中间件
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(req.file);
        cb(null, './userimages/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 限制文件大小为 5MB
}).single('imagefile');



// 数据获取
router.post('/articles', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // 如果上传出错，则返回错误消息
            return res.cc('文件太大，请选择小于 5 MB 的文件', 1);
        }
        // 如果一切正常，则插入数据
        post_Handler.articles(req, res)
    });
})

module.exports = router