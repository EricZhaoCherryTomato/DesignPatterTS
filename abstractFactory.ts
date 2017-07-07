namespace AbstractFactoryPattern {
    export interface ISource {
        getSource(): string;
    }
    export interface ITopping {
        getTopping(): string;
    }

    export interface IPizza {
        addSource() : ISource;
        addTopping() : ITopping;
    }


    export class BBQSource implements ISource {
        getSource = () => {
            return "Adding BBQ Source";
        }
    }
    export class Pepperoni implements ITopping {
        getTopping = () => {
            return "Adding Pepperoni Topping";
        }
    }

    export class SweetChiiliSource implements ISource {
         getSource = () => {
            return "Adding SweetChilli Source";
        }
    }
    export class Ham implements ITopping {
        getTopping = () => {
            return "Adding Ham Topping";
        }
    }


    export class PepperoniPizza implements IPizza {
        addSource() : ISource {
            return new BBQSource();
        }

        addTopping() : ITopping {
            return new Pepperoni();
        }
    }
    export class HamPizza implements IPizza {
        addSource() : ISource {
            return new SweetChiiliSource();
        }

        addTopping() : ITopping {
            return new Ham();
        }
    }


    export class Pizza {
        private _source: ISource;
        private _topping: ITopping;

        constructor(pizzaName: IPizza) {
            this._source = pizzaName.addSource();
            this._topping = pizzaName.addTopping();
        }

        public getAllCompenets(): void {
            console.log(this._source.getSource());
            console.log(this._topping.getTopping());
        }
    }

 }