const express = require('express')
const router = express.Router()

const photo_Handler = require('../router_handler/photo')

// const allowedOrigins = ['http://localhost:3000'];
// router.use((req, res, next) => {
//     const origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// 数据获取
router.get('/photo/:imageName', photo_Handler.getPhoto)

module.exports = router