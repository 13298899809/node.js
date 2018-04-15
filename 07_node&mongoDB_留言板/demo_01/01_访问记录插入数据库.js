var express = require("express");
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
var app = express();

// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';

app.get("/", function (req, res) {
// Connect using MongoClient
    MongoClient.connect(url, function (err, client) {
        // Create a collection we want to drop later
        const col = client.db(dbName).collection('createIndexExample1');

        // Insert a bunch of documents
        col.insert([{a: 1, b: 1}
            , {a: 2, b: 2}, {a: 3, b: 3}
            , {a: 4, b: 4}], {w: 1}, function (err, result) {
            if (err) {
                res.write("插入失败");
            }
            res.send(result);
            client.close();
        })
    });
});

app.listen(9527, "127.0.0.1");