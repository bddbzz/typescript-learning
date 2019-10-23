"use strict";
//数字枚举,从0开始，自增，反向映射
var Role;
(function (Role) {
    Role[Role["Developer"] = 0] = "Developer";
    Role[Role["Leader"] = 1] = "Leader";
    Role[Role["Manager"] = 2] = "Manager";
})(Role || (Role = {}));
//字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\u4F60\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25\u4E86";
})(Message || (Message = {}));
//异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "yes";
})(Answer || (Answer = {}));
//枚举成员，定义之后不能修改，包括const member，对已有类型的引用、常量表达式，computed data,之后的成员必须赋值
var Char;
(function (Char) {
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = 4] = "c";
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = '123'.length] = "e";
})(Char || (Char = {}));
var months = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
//枚举类型,不同类型的枚举、成员不可以比较的
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 0] = "a";
    F[F["b"] = 1] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
var e1 = 3;
var e2 = 3;
var e3 = 3;
var g1;
var g2;
//将不容易记忆的硬编码或者未来可能改变的常量定义为枚举类型，为了提升程序的可读性和可维护性，以不变应万变
