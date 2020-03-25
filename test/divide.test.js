const sort = require('../index');
const { expect } = require('chai');

// it('should divide positive integers correctly', () => {
//   // define inputs
//   const a = 8;
//   const b = 4;
//   const expectedAnswer = 2;

//   // invoke the function
//   const actualAnswer = divide(a, b);

//   // assert that expected === actual
//   expect(actualAnswer).to.equal(expectedAnswer);
// });

// it('should throw an error when divide by zero', () => {
//   // define inputs
//   const a = 8, b = 0;

//   // set up the function call
//   const fn = () => {
//     divide(a, b)
//   };

//   // assert that exception is thrown
//   expect(fn).to.throw();
// });

describe('List sorting function', () => {
  it('should sort a list correctly', () => {
    // define inputs 
    const arr1 = ['a','c','b'];
    const arr2 = ['a','b','c'];
    const expectedAnswer = arr2;
    // invoke function
    const actualAnswer = sort(arr1);
    // assert that expected === actual
    expect(actualAnswer).to.deep.equal(expectedAnswer);
  });
  it('should test equality correctly', () => {
    const a = { x: 5 };
    const b = { x: 5 };
    expect(a).to.deep.equal(b);    
  })
})
