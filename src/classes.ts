/* class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string; // this will make optional parameter

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
        // this.id = id;
        // this._balance = balance
        // this.owner = owner;
    }
    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error('Invalid amount')
        //Record transaction
        this._balance += amount;
    }
    private calculateTax() {

    }
    get balance(): number {
        return this._balance
    }
    //  set balance(value: number) {
    //      if (value < 0)
    //          throw new Error('Invalid value')
    //      this._balance = value
    //  }
}
let account = new Account(1, 'Mosh', 0)
console.log(account.balance);



// account.deposit(100)
// console.log(account.balance);
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// Readonly
// account.id = 0 */

/* class SeatAssignment {
    //Index Signature Property
    [seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh'
seats.A2 = 'John' */



//Static Members

/* class Ride {
    private static _activeRides: number = 0;
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}

let ride1 = new Ride();
ride1.start()

let ride2 = new Ride();
ride1.start()

console.log(Ride.activeRides); */


//Inheritance
class Person {
    constructor(public firstName: string, public lastName: string) {

    }
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
    walk() {
        console.log('walking');

    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }
    takeTestI() {
        console.log('Taking a test');

    }
}
let student = new Student(1, 'John', 'gmail')
