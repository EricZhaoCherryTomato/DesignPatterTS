import * as sut from '../poxy';
import { expect } from 'chai';
import 'mocha';

describe('Poxy Bank function', () => {
  it('should return the correct bank amount]', () => {
    const result = new sut.BankCheque(10);
    expect(result.getAmount()).to.equal(10);
  });
});

