const path = require('path');
exports.getPhoto = (req, res) => {
    const imageName = req.params.imageName;
    // Buffer.from() 方法将字符串转换为 Buffer 类型，使用 Buffer.toString() 方法将 Buffer 类型转换为字符串。防止中文乱码
    // const buffer = Buffer.from(imageName, "utf-8");
    res.sendFile(path.join(__dirname, '../userimages', imageName));
}  