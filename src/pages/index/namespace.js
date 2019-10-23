"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
Shape.square(10);
Shape.circle(10);
//全局、模块、umd
var module_lib_js_1 = __importDefault(require("./module-lib.js"));
module_lib_js_1.default.doSomeThing();
var moment_1 = __importDefault(require("moment"));
moment_1.default.myFunction = function myFunction(params) {
};
