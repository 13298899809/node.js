var express = require("express");

var app = express();

var router = require("./controller/router.js");

app.set("view engine", "ejs");

/**
 * 路由中间件
 */
app.use(express.static("./static"));

app.get("/",router.showIndex);

app.get("/gotoAdd.do",router.gotoAdd);

app.get("/add.do",router.Add);

app.listen(9527,"127.0.0.1");