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
    MongoClient.connect(url, function(err, client) {
        // Create a collection we want to drop later
        const col = client.db(dbName).collection('createIndexExample1');
        // Show that duplicate records got dropped
        col.find({}).project({  _id: 1 }).toArray(function(err, items) {
            test.equal(null, err);
            res.send(items);
            client.close();
        });
    });
});

app.listen(9527, "127.0.0.1");