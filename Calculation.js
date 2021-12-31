"use strict";
exports.__esModule = true;
exports.Substraction = exports.Addition = void 0;
var Addition = /** @class */ (function () {
    function Addition(x, y) {
        this.x = x;
        this.y = y;
    }
    Addition.prototype.Sum = function () {
        console.log("SUM: " + (this.x + this.y));
    };
    return Addition;
}());
exports.Addition = Addition;
var Substraction = /** @class */ (function () {
    function Substraction(x, y) {
        this.x = x;
        this.y = y;
    }
    Substraction.prototype.Substract = function () {
        console.log("SUBSTRACTION: " + (this.x - this.y));
    };
    return Substraction;
}());
exports.Substraction = Substraction;
