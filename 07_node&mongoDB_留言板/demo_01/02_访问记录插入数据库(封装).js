var express = require("express");
var app = express();
var db = require("./models/db.js");
var data = {"name": "张三1", "age": "11"};
app.get("/", function (req, res) {
    db.insertOne("teacher", data, function (err, result) {
            if (err) {
                return;
            }
            res.send(result)
        }
    );
});

app.listen(9527, "127.0.0.1");