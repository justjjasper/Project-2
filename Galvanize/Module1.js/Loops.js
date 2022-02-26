/* While Loops: Has the variable outside of the while function,
    - has condition inside while (  ), and the Iteration Statement within the function
    let const = Initialization
    while (condition) {
        statement,
        iterator;
    } */

let loopASequence = (start, end) => {
    while(start <= end) {
        console.log(start);
        start++;
    }
}

loopASequence(2, 6);


// Looping an array

let array = [1, 2, 3, 4, 5];
let index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}

// Looping a string
let string = 'I like to eat';
let index = 0;
while (index < string.length) {
    console.log(string[index]);
    index++;
}


/*For Loops
     for (initialization; condition; iteration) {
         statement
     } */

let start = 1
let end = 10
for (x = start; x < end; x++) {
    console.log(x);
}

// For Loops: Array

let array = ['a', 'b', 'c'];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Loop every other element
let array = [1, 2, 3, 4, 5,];
for (i = 0; i < array.length; i+= 2){
    console.log(array[i]);
}


/* Looping in the middle
     for (i = [index]; i < array.length; i++) {
         console.log(array[i]);
     } */



/* Looping in reverse
     for (i = array.length - 1; i > -1; i--) {
         console.log(array[1]);
     }


/* Looping with continue; -> it allows you to skip 
        the desired index and continues the loop */

let array = [1, 2, 3, 4, 5];
for (i = 0; i < array.length; i++) {
    if (i === 2) {
        continue;
    }
    console.log(array[i])
} //strings [1, 2, 4, 5]



/* looping with break; -> allows you to stop the loop
        regardles of what conditions */

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    if (i > 2) {
        break;
    }
    console.log(array[i]);
} //strings to [1, 2 , 3];


//---------------------------------------------


/* For-in Loops 
 MAINLY FOR OBJECTS (not really string/ array. but able to use)
    - loops over properties of an object
 
    set up : for (const var in object){
     console.log(var);
     console.log(object[var])
 }
*Note that var is considered a variable for properties*

 This will print out the keys-value pairs */

 let name = {
     name: 'Oni',
     beauty: 'very',
     race: 'epic',
 }

 for (let keys in name) {
     console.log(`These are the traits: ${keys}`);
     console.log(`These describe her traits: ${name[keys]}`)
 }


