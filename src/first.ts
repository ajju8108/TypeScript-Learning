/* "use strict"; */
/*
let age = 20;
if (age < 50)
    age += 10;
console.log(age); */
//# sourceMappingURL=first.js.map

/* Built In Types */
/* let sales: number = 123456789
let course: string = 'Typescript'
let is_published: boolean = true */

// We dont need to provide the types
/* let sales = 123456789
let course = 'Typescript'
let is_published = true */
//let level // type is any

// ANY TYPE

/* let level;
level = 1
level = 'a'
console.log(level);

function render(document: any) {
    console.log(document);
} */

// Arrays
// let numbers = [1, 2]
/* let numbers = [] // any type
let numbers2 : number[] = []
numbers2.forEach(n => {

}); */

//Tuples
// let user:[number, string] = [1, 'Mosh']

//ENUM
// enum Size {Small='s', Medium='m', Large='l'}
/* const enum Size {Small=1, Medium, Large}
let mySize : Size = Size.Medium
console.log(mySize); */


//Function
/* function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}
calculateTax(10000, 2022) */

//Objects
/* let employee: {
    readonly id: number,
    // name?: String
    name: String,
    retire: (date: Date) => void

} = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);

    }
}; */

// Type Alises
/* type Employee = {
    readonly id: number,
    name: String,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date: Date) => {
        console.log(date);

    }
};  */

// Union Types
/* function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2
}
kgToLbs(10)
kgToLbs('10kg') */

//Intersection Type
// let weight: number & string;
/* type Draggable = {
    drag: () => void
}
type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
} */

//Literal Types
// literal meaning (exact or specific) value
/* type Quantity = 50 | 100;
let quantity: Quantity = 100;

type metric = 'cm' | 'inch' */

//Nullable types
/* function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');


}
greet(null) */

//Optional Chaining
/* type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
let customer = getCustomer(1);
//optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// customer?.[0]

//OPtional call
let log: any = null;
log?.('a') */


// The Nullish Coaelscing Operator
/* let speed: number | null = null;
let ride = {
    //nullish value
    speed: speed ?? 30
} */

//Type Assertions
/* let phone = <HTMLInputElement>document.getElementById('phone');
phone.value */

//The Unkown Type
/* function render(document: unknown) {
    //Narrowing
    if (document instanceof ) {
        document.toUpperCase();
    }

} */




//The Never Type
/* function processEvents(): never {
    while (true) {

    }
}

processEvents()
console.log('Hello World'); */

