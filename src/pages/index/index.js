"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./datatype.ts");
var hello = 'hello typescript!';
var $root = document.getElementById('root');
if ($root !== null) {
    $root.innerHTML = hello;
}
