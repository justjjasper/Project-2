
//  Data Modeling -> lets you count a string/array into an object

function countWords(stringOfWords) {
    if(stringOfWords === '') {
      return {};
    }
    // create count object
    var counts = {};
    
      // split input into array of words
      var words = stringOfWords.split(' ');
    // iterate over the array of words
    for (var i = 0; i < words.length; i++) {
      var currentWords = words[i];
      //check if current word is not in result object
      if (counts[currentWords] === undefined) {
      //instantiate current word in object with val 1
        counts[currentWords] = 1
        //otherwise  
      } else {
          //increment value of current word in obj by 1
        counts[currentWords]++
      }
    }
    // return result count object
    return counts;
  }
  
  var result1 = countWords('ask a bunch get a bunch');
  console.log('should log "{ask: 1, a: 2, bunch: 2, get: 1}":', result1);
  
  var result2 = countWords('');
  console.log('should log "{}":', result2);





  // ///////////////////////

  function countAllCharacters(string) {
    // return empty object if given empty string
     if (string === '') {
         return {};
     }
    
    // create an objectCount
     let counts = {};
    
    // split string into an array
      let word = string.split('');
    
    // iterate over each character
      for (let i = 0; i < word.length; i++){
          let currentLetter = word[i];
      // check if current letter is not in result object
          if (counts[currentLetter] === undefined) {
    // represent the current letter with value of 1
          counts[currentLetter] = 1;
  //  otherwise
          } else {
      // increment current letter 
      counts[currentLetter]++
      }
  }
     // return an objectCount
       return counts;
  }
  
    var result1 = countAllCharacters('banana');
  console.log('should log "{b: 1, a: 3, n: 2}":', result1);