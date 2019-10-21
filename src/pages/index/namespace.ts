/// <reference path="a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

Shape.square(10)
Shape.circle(10)

//本质上是闭包，作用域隔离的作用，在模块化系统中不是完全必要，但是可以作为对全局变量时代的兼容

import circle = Shape.circle //别名