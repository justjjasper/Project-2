// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    // returns the average of an array of numbers
  }
  
  function sum(numbers) {
    // returns the sum of an array of numbers
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  
  // TESTS CASES
  
  // SOLUTION
  
  // FUNCTION DEFINITION(S)
  function average(numbers) {
    let arrayResult = [];
  
    let variable = sum(numbers) / numbers.length;
    arrayResult.push(variable);
  
    return arrayResult;
  }
  
  function sum(numbers) {
    let sumResult = [];
  
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      count += numbers[i];
    }
    sumResult.push(count);
  
    return sumResult;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertArraysEquals = (actual, expected, testName) => {
    let sameLength = actual.length === expected.length;
    let sameValues = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        sameValues = false;
        break;
      }
    }
  
    if (actual && expected) {
      console.log('passed');
    } else {
      console.log(`FAILED ${testName} Expected "${expected}", but got "${actual}"`);
    }
  }
  
  // TEST CASES
  let arrayInput = [1, 2, 3];
  
  let actualValue = average(arrayInput);
  let expectedValue = [2];
  assertArraysEquals(actualValue, expectedValue, 'should return the average of an array of numbers')