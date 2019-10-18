//类型推断
//类型断言 灵活性，有隐患
interface Foo {
    bar: number
}
let foo = {} as Foo
foo.bar = 1

let foo2: Foo = {
    bar: 3
}
//类型兼容
//鸭式变形法
//源类型具有目标类型的必要属性，少的兼容多的
interface X {
    a: any
}
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
class Java {
    helloJava() {
        console.log('hello java')
    }
}
class JavaScript {
    helloJavaScript() {
        console.log('hello javascript')
    }
}
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}