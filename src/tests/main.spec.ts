import * as sut from '../main';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = new sut.Student("Hello","","World!");
    expect(result.fullName).to.equal('Hello  World!');
  });
});


describe('Composit Pizza', () => {
  it('should return pizzas', () => {
    var pizzaStack = new sut.PizzaStack();
    pizzaStack.Add(new sut.BBQPizza());
    pizzaStack.Add(new sut.HawaiiPizza());

    expect(pizzaStack.PrintName()).to.equal('Pizza Name(s): BBQ Pizza Hawaii Pizza ');
  });
});
