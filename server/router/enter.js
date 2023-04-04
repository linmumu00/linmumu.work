const express = require('express')
const router = express.Router()

const enter_Handler = require('../router_handler/enter')


// 数据获取
router.post('/enter', enter_Handler.articles)

module.exports = router