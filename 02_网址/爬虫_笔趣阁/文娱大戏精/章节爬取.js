var http = require("https");
var fs = require("fs");
var cheerio = require("cheerio");
var iconv = require('iconv-lite');
var url = "https://www.biqugezw.com/59_59958/";

http.get(url,function (res) {
    var html = "";
    res.on("data",function (data) {
        html+=iconv.decode(data,"gbk");
    });
    res.on("end",function (res) {
   var mm =  filter(html);
        console.log(mm);
    })
});
var map = [];


 async function filter(html) {
    var $ = cheerio.load(html);
    var book = {
        bookName:$("h1").text(),
        author:$("#info p").eq(0).text(),
        lastUpdateTime:$("#info p").eq(2).text()
    };
    var chapter = {
        chapter_name:$("#list dd a"),
    };
    var len = chapter.chapter_name.length;
    for (let i = 0; i <= len ; i++) {
        // console.log((i+1)+"==="+chapter.chapter_name.eq(i).text()+"==="+"https://www.biqugezw.com"+chapter.chapter_name.eq(i).attr("href"));
        map.push(chapter.chapter_name.eq(i).attr("href"));
    }
     exports.Chapters = map;
     return map;
 };
