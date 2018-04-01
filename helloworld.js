/**
 * 引用http模块
 */
var http = require('http');
/**
 * http.createServer([requestListener])
 * requestListener 是一个函数，会被自动添加到 'request' 事件。
 * 创建一个服务器，req和res表示请求接受之后做的事情
 */
var server = http.createServer(function (req, res) {
    /**
     * req 请求 res 相应
     */
    if(req.url=='/txt'){
        console.log('服务器接收到来自'+req.url+'的请求');
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
        res.write('<h1>谁在悬崖沏一壶茶</h1></br>');
        res.write('<h2>谁在悬崖沏一壶茶</h2></br>');
        res.write('<h3>谁在悬崖沏一壶茶</h3></br>');
        res.write('<h4>谁在悬崖沏一壶茶</h4></br>');
        res.write('<h5>谁在悬崖沏一壶茶</h5></br>');
        res.write('<h6>谁在悬崖沏一壶茶</h6></br>');
        res.write('<h7>谁在悬崖沏一壶茶</h7></br>');
        res.end();
    }else if(req.url=='/html'){
        console.log('服务器接收到来自'+req.url+'的请求');
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        res.write('<h1>谁在悬崖沏一壶茶</h1></br>');
        res.write('<h2>谁在悬崖沏一壶茶</h2></br>');
        res.write('<h3>谁在悬崖沏一壶茶</h3></br>');
        res.write('<h4>谁在悬崖沏一壶茶</h4></br>');
        res.write('<h5>谁在悬崖沏一壶茶</h5></br>');
        res.write('<h6>谁在悬崖沏一壶茶</h6></br>');
        res.write('<h7>谁在悬崖沏一壶茶</h7></br>');
        res.end();
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

});
/**
 * 监听端口
 */
server.listen(9527, "192.168.1.3");
console.log('Server running at http://192.168.1.3:9527/');