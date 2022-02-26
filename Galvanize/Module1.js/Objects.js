// You cannot interpolate an object, or use +
    // you can only use ", " for objects



// Objects hold keys-value pairs. (properties aka keys);
let object = {
    key: 'pair',
    property: 'another pair',
}

// Objects can be accessed with . property or with bracket

let person = {
    name: 'Jasper',
    age: 17,
}
console.log(person.name)
console.log(person['age']); //make sure ' ' inside bracket notation


//Objects can be reassigned with = operator
let person = {
    name: 'Jasper',
    age: 17,
    swag: 'wack',
}

let reassign = person['swag'] = 'dope'
console.log(person)

//Objects can be deleted with delete object[key]


// Determing if a property is present
console.log(object[key] !== undefined) // strings to true if its present
console.log(object[key] === undefined) // strings to true if its not present


// is an Object and Not Array
function isAnObject(input) {
    // create an isObject variable
    // assign it to whether the input is an object type
    // create an isNotAnArray variable
    // assign it to whether the input is not an array
    // create an isObjectAndNotAnArray variable
    // assign it to a combination of isObject AND isNotAnArray
    // return the isObjectAndNotAnArray variable
    const isObject = typeof input === 'object';
    const isNotAnArray = !Array.isArray(input);
    const isObjectAndNotAnArray = isObject && isNotAnArray
    return isObjectAndNotAnArray;
  }
  
  var resultBoolean1 = isAnObject([1, 2, 3]);
  console.log('should log false:', resultBoolean1);
  
  var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
  console.log('should log true:', resultBoolean2);


//    Object.keys(object) : retrieves all keys of an object into an array

// Object.values(object) : retrieves all values of an object into an array




//  Creating a constructor function
  // must use this function layout strictly

function Car(color, type) {
    this.color = color;
    this.type = type;
    this.gas = 12;
}

// can add method attachments, separately for now

Car.prototype.drive = function() {
    this.gas-= 1;
}

Car.prototype.paintJob = function(color) {
    this.color = color;
}

// to use the constructor function, must have the word "new" delcaring the function

let myCar = new Car('white', 'bmw');
console.log(myCar) // strings the whole object

myCar.drive();
console.log(myCar)

myCar.paintJob('red')
console.log(myCar)
