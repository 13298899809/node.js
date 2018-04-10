var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("../views/01_hello", {
        names: ["张三", "李四", "王五"]
    })
});

app.listen(9527, "127.0.0.1");