var fs = require("fs");
var path = "./09_流式文件读取_createReadStream.js";
fs.stat(path, function (err, stats) {
    if (err) {
        throw err;
    } else {
        console.log(stats);
        /**
         * 如果是文件返回 true，否则返回 false。
         */
        console.log(stats.isFile());
        /**
         *    如果是目录返回 true，否则返回 false。
         */
        console.log(stats.isDirectory());
        /**
         *    如果是块设备返回 true，否则返回 false。
         */
        console.log(stats.isBlockDevice());
        /**
         * 如果是字符设备返回 true，否则返回 false。
         */
        console.log(stats.isCharacterDevice());
        /**
         * 如果是软链接返回 true，否则返回 false。
         */
        console.log(stats.isSymbolicLink());
        /**
         * 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
         */
        console.log(stats.isFIFO());
        /**
         *    如果是 Socket 返回 true，否则返回 false。
         */
        console.log(stats.isSocket());
    }
});