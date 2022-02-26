// For Loops good for arrays
// For-in good for objects
 
 
 
 
 var nestedObject = {
    'inner1': {a: 1, b: 2, c: 3},
    'inner2': {d: 4, e: 5, f: 6},
    'inner3': {g: 7, h: 8, i: 9}
  };
//  multiple objects within an object



var arrayOfObjects = [
    {a: 1, b: 2, c: 3},
    {d: 4, e: 5, f: 6},
    {g: 7, h: 8, i: 9}
  ];
//   multiple objects within an array


var objectOfArrays = {
    'inner1': [1, 2, 3],
    'inner2': [4, 5, 6],
    'inner3': [7, 8, 9]
  };
//   multiple arrays within an object


// Following example is a Nested Array (mult arrays in an array);
let nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (let i = 0; i < nestedArrays.length; i++) {
    for (let j = 0; j < nestedArrays[i].length; j++) {
        console.log(nestedArrays[i][j]);
    }
    console.log('End of inner loop');
}
console.log('End of outer loop');

/* strings to
1
2
3
End of inner loop
4
5
6
End of inner loop
7
8
9
End of inner loop
End of outer loop
*/





// For-in Loops with Nested Objects
var nestedObject = {
    'inner1': {a: 1, b: 2, c: 3},
    'inner2': {d: 4, e: 5, f: 6},
    'inner3': {g: 7, h: 8, i: 9}
  }

for (let key in nestedObject) {
    for (let innerKey in nestedObject[key]) {
        console.log(nestedObject[key][innerKey]);
    }
}
//strings to 1, 2, 3 ,4, 5, 6, 7, 8, 9
// We retrieved and looped the inner value, and moved to each row









// multiple objects in an array is good for
    // for loops
        // with For-in loops
let arrayOfObjects = [
    {a: 1, b: 2},
    {c: 3, d: 4},
    {e: 5, f: 6},
];

for (let i = 0; i < arrayOfObjects.length; i++) {
    for (let key in arrayOfObjects[i]) {
        console.log(arrayOfObjects[i][key]);
    }
}
// strings to 1,2,3,4,5,6








/* objectOfArrays ->
    use for(let key in obj) 
        for (let j = 0 j < obj[key].length; j++) {
            console.log(obj[key][j])
        }


    

/* 2 different arrays
        can use Nested For Loops

        HOWEVER, be aware of array2.length, DO NOT ADD
index of array2[i].length 
        - this is meant to get within nested arrayXobject etc
        - not for 2 individual arrays

This will string first element of Array1 and all of array2;
 followed by 2nd elements of Array 1 and all of array 2; */

 let array1 = ['a', 'b']
 let array2 = ['e', 'f', 'g']

 for (let i = 0; i < array1.length; i++) {
     for (let j = 0; j < array2.length; j++) { //Notice how array2.length does not have array[i].length inserted
        console.log(`${array1[i]} ${array2[j]}`)
     }
 }
 