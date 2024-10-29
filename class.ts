class Customer{
    // id: number; (error as id is not assigned or not initialized in constructor)
    id!: number;
    age!: number;

}
let cus1 = new Customer(); //default constructor
console.log(cus1);//Customer {}
cus1.id =1;
console.log(cus1);//Customer {}
cus1.age =20;
console.log(cus1); //Customer { id: 1, age: 20 }


class Employee{
    id: number; //error fixed due to constructor 
    age!: number;

    constructor(id:number, age:number){
        this.id =id;
        this.age =age;
    }
    //constructor();  error as overload not compatible
}
let emp1 = new Employee(2,21); //default constructor
console.log(emp1); //Employee { id: 2, age: 21 }


class Student{
    #name : string;
    private age : number;

    constructor(name: string, age: number){
        this.#name = name;
        this.age =age;
    }

    getName(): string {
        return this.#name;
    }
    setName(value: string) {
        this.#name = value;
    }

    getAge(): number {
        return this.age;
    }
    setAge(value: number) {
        this.age = value;
    }

    static getStudentCount(): number {
        return 10;
    }
}
let stu = new Student("Dileepa",22);
console.log(stu.getName()); //Dileepa
// stu.age = 23; error as age is private
// stu.#name = "Sadeepa"; error as name is private and cannot be accessed outside the class solution is public getter and setter
stu.setName("Sadeepa");
console.log(stu.getName()); //Sadeepa
// console.log(stu.getStudentCount()); error as getStudentCount is static method and cannot be accessed outside the class 
console.log(Student.getStudentCount()); //10


/*

When a class extends another class:

Inherits all instance properties and methods
Inherits getters and setters
Can access protected members of the parent class
Does not inherit static properties/methods, but can access them via the parent class name
Can override inherited methods
Must call super() in constructor if parent has a constructor
Private members of the parent class are not accessible
Example:

*/
class Parent {
    protected x = 10;
    static y = 20;
    private z = 30;
    method() { }
}

class Child extends Parent {
    constructor() {
        super();
        this.x; // OK
        Child.y; // OK (accessed via class name)
       // this.z; - Error, private
        this.method(); // OK
    }
}