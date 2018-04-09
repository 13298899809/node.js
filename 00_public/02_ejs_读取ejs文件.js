var ejs = require("ejs");
var fs = require("fs");
var http = require("http");

var path = "./views/index.ejs";
var server = http.createServer(function (req, res) {
    /**
     * 设置返回状态
     */
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.readFile(path, function (err, data) {
        var template = data.toString();
        var dictionary = {
            name: ["张三", "李四", "王五"]
        };
        var html = ejs.render(template, dictionary);
        res.end(html);
    });
});
server.listen(9527, "127.0.0.1");
