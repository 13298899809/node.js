var http = require("http");
var url = require('url');
var server = http.createServer(function (req, res) {
    /**
     * 获取服务器的访问路径
     * @type {string}
     */
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    res.writeHead('200', {'Content-Type': 'text/html'});
    console.log('path:' + path);
    console.log('query:' + query);
    res.write('<h1>谁在悬崖沏一壶茶</h1></br>');
    res.end();
});
server.listen(9527, "192.168.1.3");
console.log('http://192.168.1.3:9527/abc?aaa=213&bbb=12&age=33');
