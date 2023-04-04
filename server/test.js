const express = require('express');
const app = express();
const path = require('path');

// 设置允许跨域访问的域名
const allowedOrigins = ['http://localhost:3000'];

// 设置响应头，允许跨域访问
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 获取图片
app.get('/get/photo/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, 'userimages', imageName));
});

// 启动服务器
const PORT = 3008;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
