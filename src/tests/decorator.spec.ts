import * as sut from '../decorator';
import { expect } from 'chai';
import 'mocha';

describe('Pizza function', () => {
  it('should simple pizza', () => {
    const result = new sut.SimplePizza();
    expect(result.getToppings()).to.equal('Simple Cheese');
  });
});


describe('Decorate Ham Pizza', () => {
  it('should return Ham pizza', () => {
    
    var pizza = new sut.WithHam(new sut.SimplePizza());
    expect(pizza.getToppings()).to.equal('Simple Cheese, Ham');
  });
});
