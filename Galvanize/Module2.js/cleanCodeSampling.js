// FUNCTION DEFINITION(S)
function addOne(val) {
    return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
    if (condition) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + ']');
    }
}

// TEST FOR isOne
result1 = addOne(1);
assert(result1 === 2, 'should return result of a positive input number added to 1');

