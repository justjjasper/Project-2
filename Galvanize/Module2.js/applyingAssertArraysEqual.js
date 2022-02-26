// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      let element = array[i];
      newArray.push(callbackFunction(element));
    }
  
    return newArray;
  }
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n ** 3;
    });
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertArraysEqual = (actual, expected, testName) => {
    let sameLength = actual.length === expected.length;
  
    let sameValues = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        sameValues = false;
        break;
      }
    }
  
    if (sameLength && sameValues) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
  }
  
  // TEST CASES
  
  let arrayInput = [1, 2, 3];
  let addOne = num => {
    return num + 1;
  }
  
  // actualMap = map(arrayInput, addOne);
  // expectedMap = [2, 3, 4];
  
  // // console.log(map(arrayInput, addOne));
  
  // assertArraysEqual(actualMap, expectedMap, 'should return an array of numbers that add one to each value of the integer')
  
  
  actualValueCubed = cubeAll(arrayInput);
  expectedValueCubed = [1, 8, 27];
  
  assertArraysEqual(actualValueCubed, expectedValueCubed, 'should return an array that cubes the given array')