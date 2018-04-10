/**
 * 1 下载安装mongoose
 *      cnpm install mongoose --save
 * 2 在项目中引用mongoose
 *      var mongoose = require("mongoose")
 * 3 链接MongoDB数据库
 *      mongoose.connect('mongodb://localhost/test');
 * 4
 */

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/mongoose_test');

mongoose.connection.once("open",function () {
    console.log("数据库链接成功");
});
mongoose.connection.once("close",function () {
    console.log("数据库链接断开");
});
mongoose.disconnect();