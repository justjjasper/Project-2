// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
    // Break up individual word into individual letters.
    let split = word.split('');
    // Count the instances of each letter
    let count = {};
    for (let i = 0; i < split.length; i++) {
      if (count[split[i]] === undefined) {
       count[split[i]] = 1;
      } else {
        count[split[i]]++;
      }
    }
  
    let counter = 0;
    // Iterate all the counts and find the highest
    for (let key in count) {
      if (count[key] > counter) {
        counter = count[key];
      }
    }
    // Return this word's max repeat count
    return counter;
  }
  
  function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = '';
  
    // Break up input text into words (space-delimited).
    let splitUp = text.split(' ');
    // For each word...
    for (let j = 0; j < splitUp.length; j++) {
      var repeatCountForWord = findMaxRepeatCountInWord(splitUp[j])
      // If that max repeat count is higher than the overall max repeat count, then
      if (findMaxRepeatCountInWord(splitUp[j]) > maxRepeatCountOverall) {
        // update maxRepeatCountOverall
        maxRepeatCountOverall = findMaxRepeatCountInWord(splitUp[j])
        // update wordWithMaxRepeatCount
        wordWithMaxRepeatCount = splitUp[j];
      }
    }
    return wordWithMaxRepeatCount;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  let assertEquals = (actual, expected, testName) => {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  
    }
  }
  
  // TESTS CASES
  
  let input1 = findFirstWordWithMostRepeatedChars('My favorite fruit to eat is banana');
  let output1 = 'banana';
  assertEquals(input1, output1, 'should return the longest word in the text')
  