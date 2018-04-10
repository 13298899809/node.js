var express = require("express");

var app = express();

app.use(express.static("./static"))

app.listen(9527, "127.0.0.1");