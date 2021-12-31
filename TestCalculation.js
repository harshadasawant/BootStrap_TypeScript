"use strict";
exports.__esModule = true;
// import {Addition} from './Calculation';  
// import add from './addition'
var Calculation_1 = require("./Calculation");
var addObject = new Calculation_1.Addition(10, 20);
addObject.Sum();
var subObject = new Calculation_1.Substraction(10, 5);
subObject.Substract();
