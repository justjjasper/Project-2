// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function decorateClassListWithAges(classList) {
    // creates an object for each string in the input array, with an age of 10 or 11
    // returns an array of these objects
  
    // create the array for objects
    let arrayOfObjects = [];
  
    // iterate through the input array
    for (let j = 0; j < classList.length; j++) {
      // create an obj literal that contains name and age
        // use the getRandomInt fun ction to assign an age to students in the array
      let template = {};
      template['name'] = classList[j];
      template['age']= getRandomIntInclusive(10, 11);
      arrayOfObjects.push(template);
    }
    // return the array of objects
    return arrayOfObjects;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertWithinRange = (low, high, actual) => {
   if (actual >= low && actual <= high) {
      return true;
    } else {
      return false;
    }
  }
  
  let testDectorateStudentList = (input, output) => {
    // iterate over classList
    for (var i = 0; i < input.length; i++) {
      // check if current name is the same between classList and ClassListWithAge
      if (input[i] !== output[i].name) {
      // end func, maybe log failure message
      console.log(`FAILED: Incorrect name at index ${i}`);
      return;
      }
      //check if the age value for currnet classlistwithages object is b/w 10 and 11
      if (assertWithinRange(10, 11, output[i].age) === false) {
        console.log(`FAILED: Incorrect age at index: ${i}`);
        return;
      }
    }
    console.log('passed')
  }
  
  // TESTS CASES
  
  var studentList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
  "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
  "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
  
  
  
  let classListWithAges = decorateClassListWithAges(studentList);
  
  testDectorateStudentList(studentList, classListWithAges)
  