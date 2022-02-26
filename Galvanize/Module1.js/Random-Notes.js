// Alternative way of using | | operator
let or = (expression1, expression2) => {
    return !(!expression1 && !expression2)
}

//  Getting the last element of an array within an object
let obj = {
    array: [1, 2, 3]
}

let getLast = (obj, key) => {
    // edge case here
    let lastElement = obj[key].length - 1
    return obj[key][lastElement];
}


// Change a number to a string
let num = 85
num.toString();

// Change a string to a number
let string = '65';
console.log(typeof Number(string)); // logs number

// Finding index of a character without indexOf
let getIndex = (char, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2

// Finding the word with the most letters
function findMaxLengthOfThreeWords(word1, word2, word3) {
    // create an array for the params
    let array = [word1, word2, word3];
    // create a variable that equals to the first word length
    let maxLength = word1.length;
    // iterate through the array (let i = 1, start at 1 if its minLENGTH)
    for (let i = 0; i < array.length; i++) {
        // if the current word is shorter than the max length
        if (array[i].length > maxLength) {
            // reassign the maxLength(variable) to the current word
            maxLength = array[i].length;
        }
    }
    // return the variable
    return maxLength;
  }

  var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3




//  Returning the longest/shortest word in an array (even if theres a tie, return the first one)
let longestWords = (word1, word2, word3) => {
    let words = [word1, word2, word3];

    let longest = words[0];

    for (let i = 1; i < words.length; i++) {           // make sure i = 1
        if (words[i].length > longest) {
            longest = words[i];
        }
    }
    return longest;
}


// orr

function findShortestOfThreeWords(word1, word2, word3) {
    if (word1.length <= word2.length) {
        if (word1.length <= word3.length) {
            return word1;
        } else {
            return word3;
        }
    } else {
        if (word2.length <= word3.length) {
            return word2;
        } else {
            return word3;
        }
    }
  }



//   How to return a new object using the properties of an object if it is present within an arrays keys
function select(arr, obj) {
    // create a result variable
    let result = {};
  
    // iterate over the array
    for (let i =0; i < arr.length; i++) {
      // check if the input objects' property is defined
      if (obj[arr[i]] !== undefined) {
          // if it is defined, add it to the result obj
            result[arr[i]] = obj[arr[i]]
      }
    } 
    // return a result variable
    return result;
  }
 
  var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }


// Returning an array of odd length words
function filterOddLengthWords(words) {
    // create a result variable
    let result = [];
  
    // iterate over the array of words
    for (let i = 0; i < words.length; i++) {
      // if the array of words have an odd length 
      if (words[i].length % 2 !== 0) {
        // return it into the result variable
        result.push(words[i]);
      }
    }
    // return result variable
    return result; 
  }
  
  var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  console.log(output); // --> ['there', "now']


  function getLengthOfLongestElement(arr) {
    // if array is empty, return 0
    if (arr.length === []){
      return 0;
    }
    // create a variable that equals to first array element
    let longestElement = arr[0].length
  
    // iterate over array
    for (let i = 0; i < arr.length; i++){
      // if the current word is longer the array element
      if (arr[i].length > longestElement) {
        // make current word equal to array element
        longestElement = arr[i].length;
      }
    }
    // return variable
    return longestElement;
  }
  
  var output = getLengthOfLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 5

//   Get the product of the numbers in a given array;
let computeProductOfAllElements = arr => {
    // if array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    // create a product variable equal to 1
    let product = 1;
  
    // iterate over the array
    for (let i = 0; i < arr.length; i++){
      // multiply incrementer each current number
      product *= arr[i];
    }
    // return product variable
    return product
  }
  
  var output = computeProductOfAllElements([2, 5, 6]);
  console.log(output); // --> 60



//   getting Elements within an object's key that is an array

// If the array is empty, it should return an empty array.
// If the array contains no elements that are equal to 10, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array
let getElementsThatEqual10AtProperty = (obj, key) => {
    // if there is no property at key, return an empty array
    if (obj[key] === undefined) {
      return [];
    }
  
     // if property at give key is not an array, return empty array
     if (Array.isArray(obj[key]) === false) {
      return [];
    }
    
    // if the array is empty, return empty array
    if (obj[key].length === 0) {
      return []
    }
  
     // create an array variable
     let resultArray = [];
  
    // iterate over the obj
    for (let key in obj) {
      // iterate over they key's array
      for (let i = 0; i < obj[key].length; i++) {
        // if the keys array is equal to 10
        if (obj[key][i] === 10) {
            // push the element to the result array
            resultArray.push(obj[key][i]);
        }
      }
    }
  
  
    // return variable key
    return resultArray
  }
  
  var obj = {
    key: [1000, 10, 50, 10]
  }
  var output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]




  

  //  How to find the length of a string without uisng Length method
  let getStringLength = string => {
    // create counter variable
    let counter = 0;
  
    // while we have a string with some distance
    while (string !== '') {
      // "chop" the first character of the string using slice
      string = string.slice(1);
      counter++;
    }
  
    // return counter
    return counter
  }
  
  var output = getStringLength('hello');
  console.log(output); // --> 5





  // concat arrays if its just one param
  let joinArrayOfArrays = arr => {
    //create an array result
  let resultArray = [];
  
    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // concat current array inside the result array
      resultArray = resultArray.concat(arr[i]);
    }
  
    // return array result
    return resultArray;
  }
  
  var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
  console.log(output); // --> [1, 4, true, false, 'x', 'y']
  


  //  How to add digits of a number, even if its negative
  let sumDigits = num => {
    // create a negative input variable that equals to false
    let inputIsNegative = false;

    // create an if statement to see if the input number is negative
    if (num < 0) {
      // if it is negative, change it absolute value
        num = Math.abs(num);
      // change the negative input variable to true
      inputIsNegative = true;
    }

    // create a total count variable
    let total = 0;

    // change the input number into a string
    let numString = num.toString();

    // make a variable that changes the first element of the string into a number
    let firstValue = Number(numString[0]);
  
    // iterate over the string
    for (let i = 0; i < numString.length; i++) {
      // convert the current string character into a number AND increment to the total
      total += Number(numString[i]);
    } 

    // return total with an if statement
    // if negative input variable is true
    if (inputIsNegative) {
        // subtract the first value twice from the total
        total = total - (2 * firstValue);
        // return total
        return total;
    // otherwise
    } else {
        // return total
        return total;
    }
  }

  var output = sumDigits(-316);
console.log(output); // --> 4


// Getting the smallest number from mixed elements
let findSmallestNumberAmongMixedElements = arr => {
  // if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }
  // create a numbers array
  let numbersArray = [];

  // iterate through arr input
  for (let i = 0; i < arr.length; i++) {
    // if the type is a number, push it to numbers array
    if (typeof arr[i] === 'number') {
      numbersArray.push(arr[i]);
    }
  }

  // if the numbers array is empty, return 0
  if (numbersArray.length === 0) {
    return 0;
  }

  // create the smallest number variable equal to the first element in the numbers array
  let smallestNum = numbersArray[0];

  // iterate through numbers array
  for (let i = 0; i < numbersArray.length; i++) {
    // if the current element is shorter than the number variable
    if (numbersArray[i] < smallestNum) {
      // make the variable equal to that current element
      smallestNum = numbersArray[i];
    }
  } 
  // return smallest number variable
  return smallestNum
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4


// How to add the sum of a n (if n = 3, 1 + 2 + 3 = 6)
let computeSummationToN = n => {
  // create a total variable;
  let total = 0;

  // iterate equal up to nth value .... change i to value for better visual
  for (let value = 0; value <= n; value++) {
    // increment the current value to total
    total += value;
  } 
  // return total
  return total;
}

var output = computeSummationToN(6);
console.log(output); // --> 21





// scores
let convertScoreToGrade = score => {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }

  if (score <= 59) {
    return 'F';
  } else if (score <= 69) {
    return 'D';
  } else if (score <= 79) {
    return 'C';
  } else if (score <= 89) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  }
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

let convertScoreToGradeWithPlusAndMinus = score => {
  if (score > 100 || score < 0) {
    return 'INVALID SCORE';
  }

   
  if (score <= 59) {
    return 'F';
  } else if (score <= 69) {
    if (score <= 62) {
      return 'D-';
    } else if (score >= 68) {
      return 'D+';
    } else {
      return 'D';
    }
  } else if (score <= 79) {
    if (score <= 72) {
      return 'C-';
    } else if (score >= 78) {
      return 'C+';
    } else {
      return 'C';
    }
  } else if (score <= 89) {
    if (score <= 82) {
      return 'B-';
    } else if (score >= 88) {
      return 'B+';
    } else {
      return 'B';
    }
  } else if (score <= 100) {
    if (score <= 92) {
      return 'A-';
    } else if (score >= 98) {
      return 'A+';
    } else {
      return 'A';
    }
  }
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'




// creating a modulo without modulo
let modulo = (num1, num2) => {
  if (num1 === 0) {
    return 0;
  }

  if (num2 === 0) {
    return NaN;
  }

  // this may have to go first
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }


  // create a resultIsPositive boolean flag
  let resultIsPositive = true;
  if (num1 < 0) {
    resultIsPositive = false;
  }

  // make both num1 and num2 positive versions
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  // 15 - 4 = 11 - 4 = 7 - 4 = 3 
  // reassign num1 to be num1 - num2, until num1 is less than num 2
  while (num1 >= num2) {
    num1 = num1 - num2;
  }


  // check if result is positive
  if (resultIsPositive) {
    // if it is, return num 1
    return num1;
  // otherwise
  } else {
    // return -num1 
    return -num1;
  }
}

var output = modulo(25, 4);
console.log(output); // --> 1


// how to mulitply with iteration (not using *)
let multiply = (num1, num2) => {
  var resultIsPositive = true;
  if ( (num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0) ) {
    resultIsPositive = false;
  }
  
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  
  // create a result variable
  let result = 0

  // iterate num2 times
  for (let i = 0; i < num2; i++) {
    // add num1 to result
    result += num1
  } 

  if (resultIsPositive) {
    return result;
  } else {
    return -result;
  }
  // return result variable
  return result;
}

var output = multiply(4, 7);
console.log(output); // --> 28 





// how to check if a number is odd without modulo 
let isOddWithoutModulo = num => {
  // if num = 0; return false  **(if its for evens, make this equal true. 0 is an even number)**
  if (num === 0) {
    return false;
  }

  // make num an absolute value
  num = Math.abs(num);

  // make a while loop for num,
  // while num is greater than or equal to 2
  while (num >= 2) {
    // make num equal to num - 2
    num = num - 2;
  }

  // if num is 1; return true
  if (num === 1) {
    return true;
    // other wise
  } else {
    // return false
    return false;
  }
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true



// add the digits between two numbers, excluding num2 (1, 4 = 1 * 2 * 3)
let computeSumBetween = (num1, num2) => {
  // if num2 is not greater than num1, return 0
  if (num2 <= num1) {
    return 0;
  }

  // create a total variable
  let total = 0;

  // iterate through, let i equal to num1, and cap at num2
  for (let i = num1; i < num2; i++) {
    // increment the variable with i
    total += i;
  }
  // return variable
  return total
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9


let transformArrayToObject = array => {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][array[i].length - 1] 
    obj[key] = value;
  }

  return obj
}

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(transformArrayToObject(input))



// // transform an ARRAY of 2 ARRAYS of mini arrays into an array of 2 objects
// var input = [
//   [
//       ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//   ],
//   [
//       ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//   ]
// ];

let transformEmployeeData = employeeData => {
  // create empty container array
  let container = [];

  // iterate over the first array (this will break down the first layer)
  for (let i = 0; i < employeeData.length; i++) {
    // create a person array variable equal to employeeData[i]
    let personArray = employeeData[i];
    // create a person object variable
    let personObject = {};
    // iterate through the person array (use j)
    for (let j = 0; j < personArray.length; j++) {
      // let key equal to person array j to [0]
      let key = personArray[j][0];
      // let value equal to perosn array j to [1]
      let value = personArray[j][1];
      // let person obj[key] = value to person array
      personObject[key] = value;
    }
    // push person object into container
    container.push(personObject);
  }
  // return employee container
  return container;
}

// should become
[
  {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]



// creating greeting customer
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};



let greetCustomer = firstName => {
  if (customerData[firstName] === undefined) {
    return 'Welcome! Is this your first time?'
  }

  let visitsObject = customerData[firstName]
  if (visitsObject.visits === 1) {
    return `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  } else {
    return `Welcome back, ${firstName}! So glad to see you again!`;
  }
}

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
