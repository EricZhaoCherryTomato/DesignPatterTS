class BankData{
    private balance : number;
    constructor(private p : number){
        this.balance = p;
    }

    getBalance() : number{
        return this.balance;
    }
}

export class TaxPayer{
    private bankData : BankData;
    constructor(private p : number){
        this.bankData = new BankData(p);
    }

    getTax() : string{
        return "Tax is " + (this.bankData.getBalance()*0.1);
    }

    getBalance() : string{
        return "Balance is " + this.bankData.getBalance();
    }
}