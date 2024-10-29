"use strict";
class Customer {
}
let cus1 = new Customer(); //default constructor
console.log(cus1); //Customer {}
cus1.id = 1;
cus1.age = 20;
console.log(cus1); //Customer { id: 1, age: 20 }
class Employee {
    constructor(id, age) {
        this.id = id;
        this.age = age;
    }
}
let emp1 = new Employee(2, 21); //default constructor
console.log(emp1); //Employee { id: 2, age: 21 }
