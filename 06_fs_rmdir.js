var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    if (req.url == "/favicon.ico") {
        return;
    }
    fs.rmdir("./temp", function (err) {
        if (err) {
            console.log(err);
            res.end("文件夹删除失败");
        } else {
            res.end("文件夹删除成功");
        }
    });
    res.end();
});
server.listen(9527, "192.168.1.3");
console.log('Server running at http://192.168.1.3:9527/');