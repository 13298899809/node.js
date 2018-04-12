var fs = require("fs");

exports.getAllDir = function (callBack) {
    fs.readdir("./uploads", function (err, files) {
        var allDir = [];
        (function f(i) {
            if (i == files.length) {
                /**
                 * 遍历结束
                 */
                callBack(allDir);
                return;
            }
            fs.stat("./uploads/" + files[i], function (err, stats) {
                if (stats.isDirectory()) {
                    allDir.push(files[i]);
                }
                f(i + 1);
            });
        })(0);
    })
};
/**
 * 通过文件夹名 获取图片列表
 * @param photoName
 * @param callBack
 */
exports.getAllImgByDirName = function (photoName,callBack) {

    fs.readdir("./uploads/"+photoName, function (err, files) {
        var allImg = [];
        (function f(i) {
            if (i == files.length) {
                /**
                 * 遍历结束
                 */
                callBack(allImg);
                return;
            }
            fs.stat("./uploads/"+photoName+"/" + files[i], function (err, stats) {
                if (stats.isFile()) {
                    allImg.push(files[i]);
                }
                f(i + 1);
            });
        })(0);
    })
};
