import * as sut from '../main';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
 import 'mocha';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = new sut.Student("Hello","","World!");
    expect(result.fullName).to.equal('Hello  World!');
  });
});
