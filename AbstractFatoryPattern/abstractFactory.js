var AbstractFactoryPattern;
(function (AbstractFactoryPattern) {
    var BBQSource = (function () {
        function BBQSource() {
            this.getSource = function () {
                return "Adding BBQ Source";
            };
        }
        return BBQSource;
    }());
    AbstractFactoryPattern.BBQSource = BBQSource;
    var Pepperoni = (function () {
        function Pepperoni() {
            this.getTopping = function () {
                return "Adding Pepperoni Topping";
            };
        }
        return Pepperoni;
    }());
    AbstractFactoryPattern.Pepperoni = Pepperoni;
    var SweetChiiliSource = (function () {
        function SweetChiiliSource() {
            this.getSource = function () {
                return "Adding SweetChilli Source";
            };
        }
        return SweetChiiliSource;
    }());
    AbstractFactoryPattern.SweetChiiliSource = SweetChiiliSource;
    var Ham = (function () {
        function Ham() {
            this.getTopping = function () {
                return "Adding Ham Topping";
            };
        }
        return Ham;
    }());
    AbstractFactoryPattern.Ham = Ham;
    var PepperoniPizza = (function () {
        function PepperoniPizza() {
        }
        PepperoniPizza.prototype.addSource = function () {
            return new BBQSource();
        };
        PepperoniPizza.prototype.addTopping = function () {
            return new Pepperoni();
        };
        return PepperoniPizza;
    }());
    AbstractFactoryPattern.PepperoniPizza = PepperoniPizza;
    var HamPizza = (function () {
        function HamPizza() {
        }
        HamPizza.prototype.addSource = function () {
            return new SweetChiiliSource();
        };
        HamPizza.prototype.addTopping = function () {
            return new Ham();
        };
        return HamPizza;
    }());
    AbstractFactoryPattern.HamPizza = HamPizza;
    var Pizza = (function () {
        function Pizza(pizzaName) {
            this._source = pizzaName.addSource();
            this._topping = pizzaName.addTopping();
        }
        Pizza.prototype.getAllCompenets = function () {
            console.log(this._source.getSource());
            console.log(this._topping.getTopping());
        };
        return Pizza;
    }());
    AbstractFactoryPattern.Pizza = Pizza;
})(AbstractFactoryPattern || (AbstractFactoryPattern = {}));
