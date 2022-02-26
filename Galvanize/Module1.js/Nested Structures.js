//  arrayOfArrays[index].unshift(element) : adds an an element in the first array at the index

// Array.IsArray(): can also test if an array within an object by
    // let var = Array.isArray(object[key]);

    function isAnArrayAgain(inputObj, key) {
        // create a result variable
        // assign it to a call to the applicable method
        // return the result variable
        let variable = Array.isArray(inputObj[key])
        return variable;
      }
      
      let person = {
        name: 'Aaron',
        swag: 'Infinity',
        height: '5\' 7',
        'house locations': ['Miami', 'Manila', 'Tokyo'],
      }
      
      const inputKey = 'house locations';
      
      const isItAnArray = isAnArrayAgain(person, inputKey);
      console.log(isItAnArray);


      // can use 'delete' operator
      delete arrayOfObjects[indexOfObjectWithError][keyOfPropertyToBeRemoved];