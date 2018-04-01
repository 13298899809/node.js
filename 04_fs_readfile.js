var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    /**
     * fs.readFile()
     * 第一个参数 完整路径 当前路径写./
     * 第二个参数  callback 文件读取成功之后做的事情
     */
    fs.readFile("./file/04_testFile.txt",{'charset':'utf-8'},function (err,data) {
    if(err){
        throw err;
        console.log(err);
    }
    res.end(data);
});
});
server.listen(9527, "192.168.1.3");
console.log('Server running at http://192.168.1.3:9527/');