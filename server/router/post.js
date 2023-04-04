const express = require('express')
const router = express.Router()

const post_Handler = require('../router_handler/post')
const multer = require('multer');


// 配置 multer 中间件
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './userimages/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

// 数据获取
router.post('/articles', upload.single('imageFile'), post_Handler.articles)

module.exports = router