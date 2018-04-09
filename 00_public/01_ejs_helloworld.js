var ejs = require("ejs");

var str = "早上好啊:<%= name %>";

var data = {
    name:["张三","李四","王五"]
};
var html = ejs.render(str, data);
console.log(html);