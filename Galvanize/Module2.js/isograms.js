// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    // create a variable that proves text is an isogram
    // add each char to a set
    // note: a set drops dup values
    // thus, to see if all the chars were unique,
    // check length of text and the size of the set
    
    // if string is empty, return  true
    if (text.length === 0) {
      return true;
    }
    text = text.toLowerCase()
    
    // create a variable that proves text is an isogram
    let provesEqual = true;
  
    // create a variable set
    let testSet = new Set(text);
    
    // if length of text is not equal to size of set, return false
    if (text.length !== testSet.size) {
      return false;
    }
    // return the variale
    return provesEqual;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertEquals = (actual, expected, testName) => {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }
  }
  
  // TESTS CASES
  let string = 'gopHer'
  
  let actualInput = isIsogram(string);
  let expectedOutput = true;
  
  assertEquals(actualInput, expectedOutput, 'the string input should not have any repeating letters')
  
  let actualInput2 = isIsogram('baNAana');  
  let expectedOutput2 = false;
  assertEquals(actualInput2, expectedOutput2, 'the string input should not have any repeating letters')
  