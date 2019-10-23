"use strict";
var foo = {};
foo.bar = 1;
var foo2 = {
    bar: 3
};
//函数兼容性
//参数个数
//可选参数、剩余参数可以兼容固定参数和可选参数
//strictFunctionType
//参数类型
//返回值类型相同
//函数重载
//枚举类型兼容性，和数字兼容
//类的兼容性，静态成员和构造函数不参与比较，含有私有类型则不兼容（但是父类和子类兼容）
//泛型兼容
//类型参数T使用了之后会影响兼容性，定义相同也兼容
//类型保护
//instanceof
//in
//typeof
//as 
//类型保护函数
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('hello java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJavaScript = function () {
        console.log('hello javascript');
    };
    return JavaScript;
}());
function isJava(lang) {
    return lang.helloJava !== undefined;
}
