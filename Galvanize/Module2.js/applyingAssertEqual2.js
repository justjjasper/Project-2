// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      // if doesEveryElementMatch is ever false
      if (doesEveryElementMatch === false) {
        // return doesEveryElementMatch
        return doesEveryElementMatch;
      } 
      doesEveryElementMatch = callbackFunction(array[i]);
    }
  
    return doesEveryElementMatch; 
  }
  
  // ASSERT FUNCTION(S) TO BE USED 
  let assertEqual = (actual, expected, testName) => {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}] Expected false but got "${actual}"`)
    }
  }
  
  // TEST CASES
  let lessThan10 = val => { 
    return val < 10;
  }
  
  let arrayTrue = [1, 2, 3, 4];
  let actualTrue = every(arrayTrue, lessThan10);
  assertEqual(actualTrue, true, 'should return true when all array values reutrn true')
  
  let arrayFalse = [1, 13, 8, 2, 7];
  let actualFalse = every(arrayFalse, lessThan10);
  assertEqual(actualFalse, false, 'should return false when not all array values return true when tested');