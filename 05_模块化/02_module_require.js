var module_a = require("./01_module_exports");
console.log(module_a);
var sum = module_a.add(10, 15);
console.log(sum);
console.log(module_a.Person("张三", 2));