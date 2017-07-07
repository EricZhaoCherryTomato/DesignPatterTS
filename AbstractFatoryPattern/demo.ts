/// <reference path="abstractFactory.ts" />

namespace AbstractFactoryPattern {
	export namespace Oven {
		export function show() {
    		// Abstract factory1
		    var pepperoni: AbstractFactoryPattern.IPizza = new AbstractFactoryPattern.PepperoniPizza();
    		var pepperoniPizza: AbstractFactoryPattern.Pizza = new AbstractFactoryPattern.Pizza(pepperoni);
		    pepperoniPizza.getAllCompenets();

		    // Abstract factory2
		    var ham: AbstractFactoryPattern.IPizza = new AbstractFactoryPattern.HamPizza();
			var hamPizza: AbstractFactoryPattern.Pizza = new AbstractFactoryPattern.Pizza(ham);
		    hamPizza.getAllCompenets();
		}
	}
}

 let test = new AbstractFactoryPattern.Oven.show;
 
 
