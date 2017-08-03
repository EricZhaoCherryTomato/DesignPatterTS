import * as sut from '../privateClass';
import { expect } from 'chai';
import 'mocha';

describe('Tax function', () => {
  it('should get the correct tax amount', () => {
    const result = new sut.TaxPayer(10);
    expect(result.getTax()).to.equal('Tax is 1');
  });
});


describe('Tax get balance', () => {
  it('should return correct bank amount', () => {
    
    var tax = new sut.TaxPayer(10);
    expect(tax.getBalance()).to.equal('Balance is 10');
  });
});
