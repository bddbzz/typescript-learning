/// <reference path="./a.ts" />
namespace Shape {
    export function square(x: number) {
        return x * x
    }
}

Shape.square(10)
Shape.circle(10)

//本质上是闭包，作用域隔离的作用，在模块化系统中不是完全必要，但是可以作为对全局变量时代的兼容

import circle = Shape.circle //别名

//umd类库

import $ from 'jquery'

//全局、模块、umd

import moduleLib from './module-lib.js'
moduleLib.doSomeThing()

import moment from 'moment'
declare module 'moment' {
    export function myFunction(params: string): void
}
moment.myFunction = function myFunction(params: string) {
  console.log(params)
}

declare global {
    namespace globalLib {
        function doAnyThing(params: string): void
    }
}