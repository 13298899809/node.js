var files = require("../models/files");
exports.showIndex = function (req, res) {
    /*res.render("index",{
        rugePhoto:files.getAllDir()
    });*/
    files.getAllDir(function (allDir) {
        res.render("index", {
            rugePhoto: allDir
        })
    })
};

exports.rugePhoto = function (req, res) {
    var photoName = req.params.rugePhoto;
    /**
     * 具体业务交给models
     */
    files.getAllImgByDirName(photoName,function (images) {
    res.render("photo", {
        "photoName": photoName,
        "images": images
    })
    });
};

