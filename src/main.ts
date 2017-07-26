//TypeScript Quick Start
export class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
	lastName: string;
	middleInitial: string;
}
 
function greeter(person:Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.middleInitial;
}

var user = new Student("Jane", "M.", "User");

//document.body.innerHTML = greeter(user);


//Composit Pattern
interface IPizza {
	PrintName() :string;
}
class BBQPizza implements IPizza{
	PrintName(){
		return "BBQ Pizza";
	}
}
class HawaiiPizza implements IPizza{
	PrintName(){
		return "Hawaii Pizza";
	}
}

class PizzaStack implements IPizza{
	pizzas: Array<IPizza>;
	constructor(){
		this.pizzas = [];
	}

	Add(pizza:IPizza){
		this.pizzas.push(pizza);
	}

	PrintName(){
		var name:string = "Pizza Name(s): ";
		for (let pizza of this.pizzas) {
			name += (pizza.PrintName() + " ");
		}
		return name;
	}
}

//var pizzaStack = new PizzaStack();
//pizzaStack.Add(new BBQPizza());
//pizzaStack.Add(new HawaiiPizza());

//document.getElementById("Composite").innerHTML = pizzaStack.PrintName();




export function hello() {
  return 'Hello World!';
}

export default Student;