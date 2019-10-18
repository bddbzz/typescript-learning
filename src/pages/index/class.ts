class Dog {
    constructor(public name: string) { //构造函数参数可以变成实例属性，加上public
        this.name = name
    }
    //private constructor 既不能被实例化也不能继承
    //protected constructor 既不能被实例化能继承,相当于声明一个基类
    //name: string //成员属性都是实例属性，成员方法都是原型方法，es，ts，ts要求属性有初始值
    run() { }
    gender: string = 'girl'
    age?: number
    private price() { }
    //protected 在磊或子类中返回，不允许在实例中访问
    readonly legs: number = 4
    static food: string = 'bones' //静态属性只能通过类名来访问，静态成员可以被继承
}
//属性默认是public， private不能被子类调用也不能在实例调用，只能在本身调用
console.log(Dog.prototype)
let dog = new Dog('wang')
console.log(dog)

class Husky extends Dog {
    constructor(name: string, color: string) {
        super(name)
        this.color = color
    }
    color: string
}
//抽象类只能被继承不能被实例化的,抽离出共性有利于代码的复用和扩展
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
class Cat extends Animal {
    constructor(public name: string) {
        super()
    }
    run() { }
    sleep() {
        console.log('bird sleep')
    }
}
let cat = new Cat('kitty')
cat.eat()
//实现多态，多个子类对基类有不同的实现
class Bird extends Animal {
    constructor() {
        super()
    }
    sleep() {
        console.log('bird sleep')
    }
}
let bird = new Bird();
let animals: Animal[] = [cat, bird]
animals.forEach(i => {
    i.sleep()
})
//
class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}
new WorkFlow().step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this
    }
}
new MyFlow().next().step1().step2()
//约束类的共有成员，接口不能约束类的构造函数,接口的继承和合并 
interface Human {
    name: string
    eat(): void
}
//必须完全实现接口
class Asian implements Human {
    constructor(public name: string) {

    }
    eat() {

    }
}
//接口还能继承类
interface Man extends Human {
    run(): void
}
interface Child {
    cry(): void
}
interface Boy extends Man, Child { }
let boy: Boy = {
    name: '',
    eat() {

    },
    run() {

    },
    cry() {

    }
}

class Auto {
    state = 1
}
//接口抽离类的成员的时候不仅抽离了公共成员也抽离了私有、受保护成员
interface AutoInterface extends Auto{

}
class C implements AutoInterface{
    state = 1
}

class Bus extends Auto implements AutoInterface{

}