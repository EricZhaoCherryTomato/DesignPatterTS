interface IMoney{
    getAmount() : number;
}

class BankFund implements IMoney{
    private amount : number;
    constructor(private p : number){
        this.amount = p;
    }
    getAmount() : number{
        return this.amount;
    }
}
//This is poxy for the money in the account
export class BankCheque implements IMoney{
    private bankFund : BankFund;
    constructor(private p : number){
        this.bankFund = new BankFund(p);
    }
    getAmount() : number{
        return this.bankFund.getAmount();
    }
}