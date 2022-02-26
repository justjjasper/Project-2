// making function for filtering odd or even numbers from an array

let array = [1, 2, 3, 4, 5]

let oddFilter = (numbers) => {
    if(numbers === 0) {
        return 0
    }
    let inputArray = []

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            inputArray.push(numbers[i])
        }
    }
    return inputArray;
}

let getIt= oddFilter(array)
console.log(getIt)



// Getting sum of elements in an array

let array = [1, 2, 3]

let getSum = (numbers) => {
    if (numbers === 0){
        return 0
    }
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let getIt = getSum(array);
console.log(getIt);


// Getting the average of numbers

let computeAverageOfNumbers = (numbers) => {
    if (numbers.length === 0) {
        return 0;
    }

    
    let average = 0
    for (let i = 0; i < numbers.length; i++) {
        average += numbers [i];
    }
  
  return average / numbers.length
}

var input1 = [];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);
