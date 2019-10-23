"use strict";
//
//基本数据类型
var bool = true;
var num = 11;
var str = 'string';
var udf = undefined;
var nul = null;
var s1 = Symbol();
var s2 = Symbol();
//数组类型
var arr1 = [1, 2, 3]; //泛型接口
var arr2 = [3, 4, 5];
var arr3 = [1, 2, 3, '4']; //联合类型
//元组类型，限制类型和个数，访问不能越界
var tuple = [1, 'str'];
//对象，绕过类型检查的hack
var obj = { a: 1, b: 2 };
//函数,返回值类型可以省略
var add = function (a, b) { return a + b; };
var minus = function (a, b) { return a - b; };
//函数类型
var compute;
//函数具体实现
compute = function (a, b) { return a + b; };
//void
//any
//never 永远不会有返回值得类型
var error = function () {
    throw new Error();
};
//enum
//泛型
