// FUNCTION DEFINITON(S)
function addFullNameProp(obj) {
    var firstName = obj['firstName'];
    var lastName = obj['lastName'];
  
    if (firstName && lastName) {
      obj['fullName'] = firstName + ' ' + lastName;
    }
  
    return obj;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertObjectsEqual = (actual, expected, testName) => {
    actual = JSON.stringify(actual);
  
    expected = JSON.stringify(expected);
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED ${testName} Expected "${expected}", but got ${actual}`);
    }
  }
  
  // TEST CASES
  let person = {
    firstName: 'Jean',
    lastName: 'David',
  }
  
  let actualObjectInput = addFullNameProp(person);
  
  let expectedObjectInput = obj = {
    firstName: 'Jean',
    lastName: 'David',
    fullName: 'Jean David',
  };
  
  assertObjectsEqual(actualObjectInput, expectedObjectInput, 'should return an object that includes a full name')
  
  