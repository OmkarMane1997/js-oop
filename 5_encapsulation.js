class BankAccount {
    customerName;
    accountNumber;
    #balance = 0; // by usings the hash we can make the private property  we dont access the out side the class

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) { // method also we can make the private by using the hash 
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        // Logic
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const rakeshAccount = new CurrentAccount('Rakesh K', 2000);
// rakeshAccount.setBalance(400);
// rakeshAccount.balance = 5000;
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount);
