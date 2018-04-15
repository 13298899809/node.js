var db = require("../models/db");
var moment = require("moment");
var url = require("url");
var message;

exports.showIndex = function (req, res) {
    db.find("message",{},function (err,result) {
        if(err){
            return;
        }
         message = result;
    res.render("index", {
        "message":message
    })
    });

};

exports.gotoAdd = function (req, res) {
    res.render("form");
};

exports.Add = function (req, res) {
    /**
     * 获得提交的属性
     * 由于属性是true 直接过得该对象
     */
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var message = queryObj.message;
    var sj = moment().format("LLLL");
    db.insertOne("message",{
        name:name,
        message:message,
        sj:sj
    }, function (err, result) {
        if (err) {
            return;
        }
    res.redirect("/");
    res.end();
    });
};