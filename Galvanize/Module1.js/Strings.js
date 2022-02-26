// Accessing a string. Follows the 0 index rule
let funcExample = (string, index) => {
    let result = string[index];
    return result;
}
console.log(funcExample('Hello', 1));
//strings to 'e'




// .length allows you to get the length of a string
    // Can also retrieve length from a variable who's value is a string

let sentence= 'Hello, my name is Jasper Bucad.';
console.log(sentence.length);

let name = 'Jasper Bucad'.length
console.log(name);

// string[string.length - 1]; Allows you to retrieve last character of a string
let name = 'Jasper Bucad'
let funcString = string => {
    let input = string[string.length - 1];
    return input;
}

console.log(funcString(name));


//string.substring(start, end): allows you to retrieve a character
    //that INCLUDES the start, all the way up to end (EXCLUSE END);

let string = 'Javascript';
let example = javascript.substring(2, 7);
//strings to 'vascri'



// .indexOf() - Allows you to find which index is a certrain substring of a string
    //If substring is not found, - 1 will be returned.
let funcIndex = (string, subString) => {
    let input = string.indexOf(subString);
    return input;
}

const stringEx = 'Hi my name is Jasper.';
const substringEx = 'name';
const getInput = funcIndex(stringEx, substringEx);
console.log(getInput); //should string 6

// Can also nest this func so you can find other positions of substring along the string

let stringEx = 'Did you know that I am saying you because I like you.'
let substring = 'you'
let firstIndex = stringEx.indexOf(substring);
let actualSearch = stringEx.indexOf(substring, + 2);
console.log(actualSearch); // Should string to 30

//toString(): allows you to string numbers and booleans
    // variable.toString();
let num = 17;
console.log(num.toString());


// Escape Characters ( \ and \n)
    //  \n is used to skip to the next line
        // must be used right after

console.log('First line \nSecond line');