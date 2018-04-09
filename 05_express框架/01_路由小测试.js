var express = require("express");

var app = express();

app.get("/",function (req,res) {
res.send("早啊");
});

app.get("/a",function (req,res) {
    res.send("小a好啊");
});

app.listen(9527,"127.0.0.1");