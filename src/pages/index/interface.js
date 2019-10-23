"use strict";
function render(result) {
    console.log(result);
}
//鸭式变形法,满足必要条件，与绕过方法
//类型断言 as or <Result>
//字符串索引签名, 用任意字符串支持任意结果，这样可以支持多个属性了
//只读属性，可选属性
render({
    data: [
        { id: 1, name: 'Betty', gender: 'female' },
        { id: 2, name: 'Patty' }
    ]
});
render({
    data: [
        { id: 1, name: 'Betty', gender: 'female', age: 11 },
        { id: 2, name: 'Patty' }
    ]
});
var chars = ['A', 'B', 'C'];
var names = {
    'a': 'a'
};
//四种定义函数的方法
{
    //function 定义加实现
    //只定义了没有实现
    var add_1;
    ;
    var add2 = function (a, b) { return a + b; };
}
var lib = (function () { });
lib.version = '1.0';
lib.doSomeThing = function () { };
function add5(x, y) {
    return y ? x + y : x;
}
add5(1);
function add6(x, y, z, q) {
    if (y === void 0) { y = 1; }
    if (q === void 0) { q = 1; }
}
add6(1, undefined, 3);
function add7(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
add7(1, 2, 3);
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce(function (pre, cur) { return pre + cur; });
    }
    else if (typeof first === 'string') {
        return rest.join(',');
    }
    return rest;
}
