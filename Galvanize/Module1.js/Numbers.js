//Addition
const sum = 4 + 7
console.log(sum)

//Subtraction
const subtract = 7 - 3
console.log(subtract)

//Exponent
const exponent = 5 * 2
console.log(exponent) 

//Modulo
const remainder = 5 % 2
console.log(remainder)
// strings to 1

// Difference between +- and + is that +- is an increment
let incrementer = (base, increment) => {
    let result = base += increment;
    return result
};

console.log(incrementer(5, 2));

// Absolute Values with Math.abs()
// can also invoke with variables who are equal to number values
const number = -43
console.log(Math.abs(number));

// Math.floor(): Allows you to round down

//Math.ceil(): Allows you to round up 

//Numbers.parseInt(): allows you to change a stringed Number to a Number value
let fakeNumber = '42';
console.log(Number.parseInt(fakeNumber));

//Numbers.parseFloat() : allows you to change a stringed Decimal to a Float value
let fakeFloat = '4.2';
console.log(Number.parseFloat(fakeFloat));

/* Math.random() * (max - min) + min: 
    follow this in order to get a range of random numebrs
    The min will always be inclusive, the max will always be exclusive 
    Can also be used between variables
    
    If you want min and MAX to be  inclusive, use
    Math.random() * (max - min + 1) + min;
    */

let number = Math.random() * (100 - 1) + 1;
console.log(number);

const max = 99
const min = 1
console.log(Math.random () * (max - min) + min);


// haha
function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    let compoundedInterest = (principal * Math.pow((1 + (interestRate/compoundingFrequency)), (compoundingFrequency * timeInYears))) - principal;
  
    return compoundedInterest
  }