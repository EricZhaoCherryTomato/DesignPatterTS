/// <reference path="abstractFactory.ts" />
var AbstractFactoryPattern;
(function (AbstractFactoryPattern) {
    var Oven;
    (function (Oven) {
        function show() {
            // Abstract factory1
            var pepperoni = new AbstractFactoryPattern.PepperoniPizza();
            var pepperoniPizza = new AbstractFactoryPattern.Pizza(pepperoni);
            pepperoniPizza.getAllCompenets();
            // Abstract factory2
            var ham = new AbstractFactoryPattern.HamPizza();
            var hamPizza = new AbstractFactoryPattern.Pizza(ham);
            hamPizza.getAllCompenets();
        }
        Oven.show = show;
    })(Oven = AbstractFactoryPattern.Oven || (AbstractFactoryPattern.Oven = {}));
})(AbstractFactoryPattern || (AbstractFactoryPattern = {}));
var test = new AbstractFactoryPattern.Oven.show;
