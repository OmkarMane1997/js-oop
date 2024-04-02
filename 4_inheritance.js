class BankAccount { // parent class
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount { // childe class we have extends the parent class property into child class
    transactionLimit = 50000;

    constructor(customerName, balance = 0) { // call the parent class property here
        super(customerName, balance);   // first call the parent property using the supper.
    }

    takeBusinessLoan(amount) {
        console.log('Taking business loan: ' + amount);
    }
}

class SavingAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ' + amount);
    }
}

const rakeshAccount = new SavingAccount('Rakesh K', 500);
rakeshAccount.deposit(500);
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);
console.log(rakeshAccount);


// function constructor
// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };

// const rakeshAccount = new SavingAccount('Rakesh K', 500);
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);
// rakeshAccount.takePersonalLoan(40000);
// // console.log(rakeshAccount);
