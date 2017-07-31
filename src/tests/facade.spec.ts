import * as sut from '../facade';
import { expect } from 'chai';
import 'mocha';

describe('Pizza Facade function', () => {
  it('should return created pizza', () => {
    const result = new sut.PizzaFacade();
    expect(result.makePizza()).to.equal('HamCheeseBBQ');
  });
});
