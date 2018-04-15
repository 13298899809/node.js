/**
 * 封装数据库的常用操作
 */
const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017';
const databases = 'test';
function conntctDB(callback) {
    // Connect using MongoClient
    MongoClient.connect(url, function (err, client) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(err, client);
    });

};
/**
 * 单条信息插入
 * @param dbName      表名
 * @param data        数据
 * @param callback    回调函数
 */
exports.insertOne = function (dbName, data, callback) {
    conntctDB(function (err, client) {
        client.db(databases).collection(dbName).insertOne(data, function (err, result) {
            callback(err, result);
            client.close();
        });
    })
};


exports.find = function (dbName, data,callback) {
    MongoClient.connect(url, function(err, client) {
        // Create a collection we want to drop later
        const col = client.db(databases).collection(dbName);
        // Show that duplicate records got dropped
        col.find(data).toArray(function(err, items) {
            callback(err, items);
            client.close();
        });
    });
};