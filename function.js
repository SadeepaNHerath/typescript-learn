"use strict";
function add(num1, num2) {
    return num1 + num2;
} //name function
//if nothing returned its return type is void and if type given to a funtion it should return that type of data otherwise it is an error 
const sub = (num1, num2) => num1 - num2; //arrow function do not use function but it works as a function and this is called as sub(10,3)
const multiply = function (num1, num2) {
    return num1 * num2;
}; // function expression . This is also called as a normal function "multiply(10,3)" ;
const addition = function (num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
console.log(addition(10, 20)); //output 30 - optional parameter
const multi = function (num1, num2, num3 = 10) {
    return num1 * num2 * num3;
};
console.log(multi(1, 2)); //output 20 - required parameter
console.log(multi(1, 2, 5)); //output 10 - required parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15 -Rest parametr
console.log(sum(10, 20)); // Output: 30 -Rest parameter
console.log(sum(10, ...[10, 20])); // Output: 40 -Rest parameter
function identity(arg) {
    return arg;
} //Generic function 
console.log(identity("Hello")); // Output: Hello
console.log(identity(42)); // Output: 42
console.log(identity("22"));
