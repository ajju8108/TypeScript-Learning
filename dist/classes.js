"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor' + super.fullName;
    }
}
let teacher = new Teacher('john', 'smith');
console.log(teacher.fullName);
//# sourceMappingURL=classes.js.map