/**
 * 简单的路由演示
 */
var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    var userurl = req.url;
    if (userurl.startsWith('/student/')) {
        var stuid = userurl.substr(9);
        res.write(stuid);
        if (stuid.length == 10) {
            res.end("您要查询的学生的学号是" + stuid);
        } else {
            res.end("您的学号信息输入有误，请重试");
        }
    } else if (userurl.startsWith('/teacher/')) {
        var teaid = userurl.substr(9);
        res.write(teaid);
        if (teaid.length == 6) {
            res.end("您要查询的教师的学号是" + teaid);
        } else {
            res.end("您的教师信息输入有误，请重试");
        }
    } else {
        res.end("您的信息输入有误，请重试");
    }
});
server.listen(9527, '127.0.0.1');
