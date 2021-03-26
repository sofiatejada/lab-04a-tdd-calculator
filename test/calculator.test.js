// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addition, subtraction, multiplication, division, toNumber } from '../calculator.js';
const test = QUnit.test;




test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // inputs?
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtracting', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 9;
    
    const actual = subtraction(x, y);

    expect.equal(actual, expected);
});

test('multiplying', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 22;
    
    const actual = multiplication(x, y);

    expect.equal(actual, expected);
});

test('dividing', (expect) => {
    const x = 22;
    const y = 11;
    const expected = 2;

    const actual = division(x, y);

    expect.equal(actual, expected);
});


test('does 0/0=0', (expect) => {
    const x = 0;
    const y = 0;
    const expected = 0;

    const actual = division(x, y);

    expect.equal(actual, expected);
});

test('toNumber', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;

    const actual = toNumber(input);

    expect.equal(actual, expected);

});

test('empty string returns 0', (expect) => {
    const x = '';
    const y = '';
    const expected = 0;
    
    const actual = subtraction(x, y);

    expect.equal(actual, expected);
});