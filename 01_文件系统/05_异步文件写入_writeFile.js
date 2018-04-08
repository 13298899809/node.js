/**
 * fs.writeFile(file, data[, options], callback)
 * file <string> | <Buffer> | <integer> 文件名或文件描述符
 data <string> | <Buffer> | <Uint8Array>
 options <Object> | <string>
 encoding <string> | <null> 默认 = 'utf8'
 mode <integer> 默认 = 0o666
 flag <string> 默认 = 'w'
 callback <Function>
 err <Error>
 */
var fs = require("fs");
var file = "./hello4.txt";
var data = "writeFile写入的内容";
fs.writeFile(file, data, function (err) {
    if (!err) {
        console.log("成功");
    } else {
        console.log("失败");
    }
});