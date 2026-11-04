class BankAccount{
    #balance;
    constructor(holderName,balance){
        this.holderName = holderName;
        this.#balance = balance;
    }

    getBanlance(){
        return this.#balance;
    }

    deposit(amount){
        if(amount <= 0){
            console.log("Invalid Amount");
            return;
        }
        
            this.#balance = this.#balance + amount;
        
    }

    withdraw(amount){
        if(amount>= this.#balance){
            console.log("Insufficiant balance");
            return;
        }
        this.#balance = this.#balance - amount;
    }

    getAccountType(){
        console.log("this is bank account");
    }

}

class SavingsAccount extends BankAccount{
    constructor(holderName,balance,intrest){
        super(holderName,balance);
        this.intrest = intrest;
        return;
    }
    getAccountType(){
        console.log("this is savings account");
    }

}

const UtkarshPNB = new BankAccount("Utkarsh", 50000);

console.log(`Name : ${UtkarshPNB.holderName}`);
console.log(`Balance : ${UtkarshPNB.getBanlance()}`);

UtkarshPNB.deposit(10000);
console.log(`Balance : ${UtkarshPNB.getBanlance()}`);

UtkarshPNB.withdraw(5000);
console.log(`Balance : ${UtkarshPNB.getBanlance()}`);



const HannahSBI = new SavingsAccount("Hannah Mary John", 60000, 8);

console.log(`Name : ${HannahSBI.holderName}`);
console.log(`Balance : ${HannahSBI.getBanlance()}`);
console.log(`Interest : ${HannahSBI.intrest}`);

HannahSBI.deposit(10000);
console.log(`Balance : ${HannahSBI.getBanlance()}`);

HannahSBI.withdraw(5000);
console.log(`Balance : ${HannahSBI.getBanlance()}`);


