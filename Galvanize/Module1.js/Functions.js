/* Accumulator Pattern
    - broken down to 3 parts
        - how to receive input
        - creating an empty array to place input
        - the accumlator pattern
            - use For Loop
            - use modulo 
            - don't forget to treat numbers[i] as the variable after loops
                treat numbers[i] as what you want each outcome of the loop
    */
function filterOddElements (numbers) {
    if (numbers.length === 0) {
        return [];
    }
    
    let oddElementArray = []
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddElementArray.push(numbers[i]);
        }
    }
    return oddElementArray;
}

var output = filterOddElements([1, 2, 3, 4, 5])
console.log(output)

