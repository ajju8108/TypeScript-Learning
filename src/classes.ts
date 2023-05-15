class Account {
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
    /*  set balance(value: number) {
         if (value < 0)
             throw new Error('Invalid value')
         this._balance = value
     } */
}
let account = new Account(1, 'Mosh', 0)
console.log(account.balance);



// account.deposit(100)
// console.log(account.balance);
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// Readonly
// account.id = 0