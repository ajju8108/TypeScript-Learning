"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.balance = balance;
        this.owner = owner;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let account = new Account(1, 'Mosh', 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=classes.js.map