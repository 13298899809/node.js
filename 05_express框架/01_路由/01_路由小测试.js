var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
// GET method route
app.get('/get', function (req, res) {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/post', function (req, res) {
    res.send('POST request to the homepage');
});

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

// 匹配 /about 路径的请求
app.get('/about', function (req, res) {
    res.send('about');
});

// 匹配 /random.text 路径的请求
app.get('/random.text', function (req, res) {
    res.send('random.text');
});

app.get('/stu/:id', function (req, res) {
    res.send('/stu/:id:' + req.params["id"]);
});

app.listen(9527, "127.0.0.1");