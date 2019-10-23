"use strict";
//联合类型 函数重载
//泛型 约束类型
function log(value) {
    return value;
}
log(['a', 'b']);
log(['a', 'b']);
var myLog = log;
var myLog3 = log;
myLog3(1);
//泛型不能约束静态成员
var Log4 = /** @class */ (function () {
    function Log4() {
    }
    Log4.prototype.run = function (value) {
    };
    return Log4;
}());
var log4 = new Log4();
log4.run(1);
function log5(value) {
    return value;
}
log5('sss');
