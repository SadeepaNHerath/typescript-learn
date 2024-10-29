interface Person {
    name: string;
    age?: number;
    address: string;
}
let parents: Person = {
    name: "John Doe",
    address: "123 Main St"
}

interface Students extends Person{
    rollNo: number;
    marks: number;
}
let stud: Students = {
    name: "John Doe",
    address: "123 Main St",
    rollNo: 1,
    marks: 90
}


// Using Interfaces as Types
interface Point {
    x: number;
    y: number;
}

let coordinates: Point = { x: 10, y: 20 };
function printPoint(point: Point) {
    console.log(`${point.x}, ${point.y}`);
}


// Implementing Interfaces
interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        console.log('Woof!');
    }
}

// Extending Interfaces
interface BasicShape {
    color: string;
}

interface Circle extends BasicShape {
    radius: number;
}

// Using extended interface
let myCircle: Circle = {
    color: "red",
    radius: 5
};

// Optional Properties
interface User {
    name: string;
    age?: number;    // Optional property
    email?: string;  // Optional property
}

let user: User = { name: "John" }; // Valid
let user2: User = { name: "Jane", age: 25 }; // Also valid


// Basic object destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const { firstName, lastName } = person;

// With alias
const { firstName: fname, lastName: lname } = person;

// With default values
const { age = 20 } = person;

// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;

// Skipping elements
const [first, , third] = numbers;

// Rest operator
const [first, second, ...rest] = numbers;

// With default values
const [a = 0, b = 0] = [1];


// Complete example combining multiple concepts
interface Vehicle {
    brand: string;
    model?: string;  // Optional
    year: number;
}

interface Car extends Vehicle {
    doors: number;
}

// Implementation
class Sedan implements Car {
    brand: string;
    model?: string;
    year: number;
    doors: number;

    constructor(carProps: Car) {
        const { brand, model, year, doors } = carProps; // Object destructuring
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.doors = doors;
    }
}

// Usage
const carData = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    doors: 4
};

const myCar = new Sedan(carData);

// Array example
const carInfo = ["Toyota", "Camry", 2022];
const [brand, model, year] = carInfo; // Array destructuring