//数字枚举,从0开始，自增，反向映射
enum Role {
    Developer,
    Leader,
    Manager,
}
//字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}
//异构枚举
enum Answer {
    N,
    Y = 'yes'
}
//枚举成员，定义之后不能修改，包括const member，对已有类型的引用、常量表达式，computed data,之后的成员必须赋值
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length
}

//常量枚举，不需要对象，只需要对象的值的时候
const enum Month {
    Jan,
    Feb,
    Mar
}
let months = [Month.Jan, Month.Feb, Month.Mar]

//枚举类型,不同类型的枚举、成员不可以比较的
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3

let e1: E.a = 3
let e2: E.b = 3
let e3: E.b = 3

let g1: G
let g2: G.a

//将不容易记忆的硬编码或者未来可能改变的常量定义为枚举类型，为了提升程序的可读性和可维护性，以不变应万变
