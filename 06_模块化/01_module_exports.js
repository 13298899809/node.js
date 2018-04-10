var a = 1;
var b = 1;
var sum = a + b;

exports.a = a;
exports.b = b;
exports.sum = sum;
exports.add = function (para_a, para_b) {
    return para_a + "+" + para_b + "=" + (para_a + para_b);
};
exports.Person = function (name, age) {
    return "name:" + name + " age:" + age;
};

