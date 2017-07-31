interface Pizza {
    getCost(): number;
    getToppings(): string;
}

export class SimplePizza implements Pizza {
    getCost() : number {
        return 1;
    }

    getToppings() : string {
        return "Simple Cheese";
    }
}

abstract class PizzaDecorator implements Pizza {
    decoratedPizza : Pizza;
    constructor(public p : Pizza){
        this.decoratedPizza = p;
    }

    getCost() : number {
        return this.decoratedPizza.getCost();
    }

    getToppings() : string {
        return this.decoratedPizza.getToppings();
    }
}

export class WithHam extends PizzaDecorator {
    constructor(public p: Pizza){
        super(p);
    }

    getCost() : number {
        return super.getCost() + 0.5;
    }

     getToppings() : string {
        return super.getToppings() + ", Ham";
    }

}

