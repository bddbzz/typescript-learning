"use strict";
//交叉类型,取并集
var pet;
var DogPet = /** @class */ (function () {
    function DogPet() {
    }
    DogPet.prototype.run = function () { };
    DogPet.prototype.eat = function () { };
    return DogPet;
}());
var CatPet = /** @class */ (function () {
    function CatPet() {
    }
    CatPet.prototype.jump = function () { };
    CatPet.prototype.eat = function () { };
    return CatPet;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new DogPet() : new CatPet();
    pet.eat();
    return pet;
}
//联合类型,可以为类型中的一个
var a;
//字面量类型
var b;
var c;
function area(s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.pow(s.r, 2) * Math.PI;
        default:
            return (function (e) { throw new Error(e); })(s); //有遗漏就会报错
    }
}
var key;
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
