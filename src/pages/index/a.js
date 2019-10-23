"use strict";
var Shape;
(function (Shape) {
    function circle(r) {
        return Math.PI * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
