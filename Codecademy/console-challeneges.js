function getProduct(num1, num2) {
    return num1* num2;
};

let numbers = {
  number1: 5,
  number2: 1000,
  get retrieveNumber1 () {
    if(typeof this.number1 === 'number'){
      return this.number1
    }
  },
  get retrieveNumber2 () {
    if(typeof this.number2 === 'number'){
      return this.number2;
    }
  } 
}

const multiply = getProduct(numbers.retrieveNumber1, numbers.retrieveNumber2);

console.log(multiply)

// console.log(numbers.number1)
// console.log(numbers.number2)
// console.log(numbers.number1 * numbers.number2)