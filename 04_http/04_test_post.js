var http = require("http");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
    /**
     * 设置返回状态
     */
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    /**
     * 获得提交的属性
     * 由于属性是true 直接过得该对象
     */

//如果你的访问地址是这个，并且请求类型是post
    if ("/post" == req.url && req.method.toLowerCase() == "post") {
        req.on("data", (chunk) => {
                console.log('响应主体:' + chunk)
                // 假设存在 gbkDecodeURIComponent 函数。
                var dataobj = querystring.parse(chunk.toString());
                console.log(dataobj);
            }
        );
        res.on('end', () => {
            console.log('响应中已无数据。');
        });
    }


    res.end();
});

server.listen(9527, "127.0.0.1");
console.log("http://127.0.0.1:9527/post")
