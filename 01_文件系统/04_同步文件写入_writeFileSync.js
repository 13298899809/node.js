/**
 * fs.writeFileSync(file, data[, options])
 * file <string> | <Buffer> | <integer> 文件名或文件描述符
 data <string> | <Buffer> | <Uint8Array>
 options <Object> | <string>
 encoding <string> | <null> 默认 = 'utf8'
 mode <integer> 默认 = 0o666
 flag <string> 默认 = 'w
 *
 */
var fs = require("fs");
var file = "./hello3.txt";
var data = "writeFileSync写入的内容";
fs.writeFileSync(file, data);