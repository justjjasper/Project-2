// FUNCTION DEFINITION(S)
function square(n) {
    return n * n;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertEqual = (actual, expected, testName) => {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual +'"');
    }
  }
  
  // TEST CASES
  actual1 = square(3);
  expected1 = 9;
  assertEqual(actual1, expected1, 'should square a positive integer');

  actual2 = square(-4);
  expected2 = 16;
  assertEqual(actual2, expected2, 'should square a negative integer');

  actual3 = square(0)
  expected3 = 0;
  assertEqual(actual3, expected3, 'should square a zero input value');

  actual4 = square(0.5);
  expected4 = 0.25;
  assertEqual(actual4, expected4, 'should square a decimal input');