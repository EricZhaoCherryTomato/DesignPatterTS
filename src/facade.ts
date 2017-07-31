
    class Ham {
        AddHam(): string{
            return "Ham";
        }
    }

    class Cheese {
        AddCheese(): string{
            return "Cheese";
        }
    }

     class BBQ {
        AddBBQ(): string{
            return "BBQ";
        }
    }

    export class PizzaFacade {
        ham : Ham;
        cheese : Cheese;
        bbq : BBQ;

        constructor(){
            this.ham = new Ham();
            this.cheese = new Cheese();
            this.bbq = new BBQ();
        }

        makePizza() : string {
            return this.ham.AddHam() + this.cheese.AddCheese() + this.bbq.AddBBQ();
        }
    }


