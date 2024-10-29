"use strict";
let num1 = "number1"; // TypeScript infers type as string
// num1=2; (error because typescript is an type safe language. This is not error if these lines written in js)
let num2 = 2; //number
//num3:number = 3; (error. Need this as " let num3 : number = 3 ; ")
let isValid;
//console.log(isValid); (error as isValid is not assigned yet. But in js it has default value to a boolean variable as "false". also ohter data tyeps cannot used without assigning in ts .)
//let isFalse = !!"";  output false if value of isFalse get in js . but error in ts .
let numList = [1, 2, 3, 4, 5, 6, 7]; //array
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
let c = color.Blue;
let d = 1 /* colors.Blue */;
//When const is not applied to enum in production js have the enum type also . But we need only the outputof it so we can get that using naming that as as a constant
let customer; //tuples just like array but in a specific type way
customer = ["2", 2]; //error in customer = [2,"2"]; as a tuple
let num4; //type as any . In ts always try not to use any
