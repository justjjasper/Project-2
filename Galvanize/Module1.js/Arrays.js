// Array.isArray() allows you true/false if its an array.


//  array[index]; to access array elements.
    //arrays are 0 based indexed

    // variableArray.length : allows you to access the length of an array


// array[array.length - 1] : allows you to access the name of the last element in an array

let array = ['One', 'Two', 'Three', 'Four']
let lastIndex = array.length - 1
let lastElement = array[lastIndex]
console.log(lastElement);





//.push()  -> lets you to add an element towards 
// the end of an array
let array = [1, 2 , 3]
let number = 4
let pushMe = array.push(number);
console.log(array); //[1. 2. 3. 4x  ]



// .pop() removes the last element in an erray
//  does not need to add a variable in the param of pop
let array = [1, 2, 3, 4];
let applyPop = array.pop();
console.log(array) // now updated [1, 2, 3]
console.log(applyPop) // tells you which element is popped, which is 4



//.unshift(); allows you to add an element
// at the beginning of an array
let array = [2, 3, 4]
let applyUnshift = array.unshift(1);
console.log(array);


// .shift(): allows you to remove an element from the beginning of an array
let array = [0, 1, 2 ,3 ,4];
let applyShift = array.shift();
console.log(array); //string to [1, 2, 3, 4];

/* .splice() : (shallow copy return) allows you to add and delete elements in an array
    add: array.splice((indexPos, numOfDeletedElem), addedElement)
    delete: array.splice(indexPos,numOfDeletedElm) */

let array = [1, 2, 4, 5];
const indexPos = 2
const numOfDeletedElem = 0
const addedElem= 3 

// let addSplice = array.splice(2, 0 ,3)
let addSplice = array.splice(indexPos, numOfDeletedElem, addedElem);
console.log(array); // [1, 2 ,3 ,4 ,5]



let array = [1, 2, 3, 100, 200, 4]
// let deleteSplice = array.splice(3, 2);
let startIndex = 3
let numOfDeletedElem = 2
let deleteSplice = array.splice(startIndex, numOfDeletedElem);
console.log(array)

//add even more elementws
// let addMoreSplice = array.splice(4 ,0, 4, 5)
let array = [1, 2, 3, ]  //adds 4 and 5 (just lazy to code)


/* .slice() : allows you to make a shallow copy of array (ORIGINAL ARRAY NOT MUTATED)
    .slice(startIndex, endIndex) 
            - you excluse endIndex 
    if you .slice() without an end, or param, it'll copy the array */

var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];
var todaysHike = altitudesAlongHikingTrail.slice(1, 4);
console.log(todaysHike) // [70, 110, 170]


// slice method that returns everything after the index(excluding index)
let array = [1, 2, 3, 4, 5]
let sliceIt = array.slice(n + 1)  // this is basically a number following through the end of the index 

// .concat() : just combines one array to the end of another
let array1 = [1, 2 ,3];
let array2 = ['a', 'b', 'c'];
let combine = array1.concat(array2);
console.log(combine)


/* .join() : changes an array to a string  
    .join(): a, b, c
    .join(''): abc
    .join(' '): a b c 
    .join('-'): a-b-c */

    const sentence = ['I', 'like', 'to', 'ski.'];
    const joiner = ' ';
    const joinedSentence = sentence.join(joiner);
    console.log(joinedSentence)

/* .split(): transforms string into array
    .split(' '): ['abc']
    .split(''): ['a', 'b', 'c']
    'a-b-c'.split('-') = ['a', 'b', 'c'] <- split on a string */

    function applySplit(stringToBeSplit, splitter) {
        let splitString = stringToBeSplit.split(splitter);
        return splitString
      }
      
      const example = applySplit('I-like-you.', '-')
      console.log(example)  


/* .indexOf() : helps you find a certain index of an element
      - can also be used parameters of (elementToBeFound, afterThisElement); */

let array = [1, 2, 3, 4, 5];
console.log(array.indexOf(4)); //strings to 3

let array = [1, 2, 3, 2, 1, 3, 2];
console.log(array.indexOf(1, 3)); // strings to 4
// we're looking for Index 1, after element 3

