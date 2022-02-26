// Assert equals 
let assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    if (actual !== expected) {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
    }
  }
}

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"



let assertArraysEqual = (actual ,expected, testName) => {
  // create a variable to check if the length of actual and expected are the same
  let sameLength = actual.length === expected.length;

  // create a variable that actual and expected values are true
  let sameValues = true

  // create a if conditional statement where length and true values are passed
  if (sameValues && sameLength) {
    // if true, console pass
    console.log('passed');
  // if not, fail speech
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
  }
}
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed




// assertObjects equal  (JSON.stringify(variables) and make them equal to each other)
let assertObjectsEqual = (actual, expected, testName) => {
    actual = JSON.stringify(actual);
  
    expected = JSON.stringify(expected);
  
    if (actual === expected) {
      console.log('passed') 
    } else {
      console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
    }
  }
  