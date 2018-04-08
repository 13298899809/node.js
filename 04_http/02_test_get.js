var http = require("http");
var url = require("url");

var server = http.createServer(function (req,res) {
    /**
     * 设置返回状态
     */
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    /**
     * 获得提交的属性
     * 由于属性是true 直接过得该对象
     */
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    res.end("服务器收到了表单请求"+name+age);
});

server.listen(9527,"127.0.0.1");
