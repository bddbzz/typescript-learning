"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
        this.gender = 'girl';
        //protected 在磊或子类中返回，不允许在实例中访问
        this.legs = 4;
        this.name = name;
    }
    //private constructor 既不能被实例化也不能继承
    //protected constructor 既不能被实例化能继承,相当于声明一个基类
    //name: string //成员属性都是实例属性，成员方法都是原型方法，es，ts，ts要求属性有初始值
    Dog.prototype.run = function () { };
    Dog.prototype.price = function () { };
    Dog.food = 'bones'; //静态属性只能通过类名来访问，静态成员可以被继承
    return Dog;
}());
//属性默认是public， private不能被子类调用也不能在实例调用，只能在本身调用
console.log(Dog.prototype);
var dog = new Dog('wang');
console.log(dog);
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    return Husky;
}(Dog));
//抽象类只能被继承不能被实例化的,抽离出共性有利于代码的复用和扩展
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Cat.prototype.run = function () { };
    Cat.prototype.sleep = function () {
        console.log('bird sleep');
    };
    return Cat;
}(Animal));
var cat = new Cat('kitty');
cat.eat();
//实现多态，多个子类对基类有不同的实现
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super.call(this) || this;
    }
    Bird.prototype.sleep = function () {
        console.log('bird sleep');
    };
    return Bird;
}(Animal));
var bird = new Bird();
var animals = [cat, bird];
animals.forEach(function (i) {
    i.sleep();
});
//
var WorkFlow = /** @class */ (function () {
    function WorkFlow() {
    }
    WorkFlow.prototype.step1 = function () {
        return this;
    };
    WorkFlow.prototype.step2 = function () {
        return this;
    };
    return WorkFlow;
}());
new WorkFlow().step1().step2();
var MyFlow = /** @class */ (function (_super) {
    __extends(MyFlow, _super);
    function MyFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyFlow.prototype.next = function () {
        return this;
    };
    return MyFlow;
}(WorkFlow));
new MyFlow().next().step1().step2();
//必须完全实现接口
var Asian = /** @class */ (function () {
    function Asian(name) {
        this.name = name;
    }
    Asian.prototype.eat = function () {
    };
    return Asian;
}());
var boy = {
    name: '',
    eat: function () {
    },
    run: function () {
    },
    cry: function () {
    }
};
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
    }
    return Auto;
}());
var C = /** @class */ (function () {
    function C() {
        this.state = 1;
    }
    return C;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
