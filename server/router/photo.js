const express = require('express')
const router = express.Router()

const photo_Handler = require('../router_handler/photo')


// 数据获取
router.get('/photo/:imageName', photo_Handler.getPhoto)

module.exports = router