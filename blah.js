// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  // use split to change string sentence into an array
  let splitIt = sentence.split(' ');
  let foundPalindrome = [];
  // iterate words and collect the palindromes
  for (let j = 0; j < splitIt.length; j++) {
    if (isPalindrome(splitIt[j])) {
      foundPalindrome.push(splitIt[j]);
    }
  }
  // sort the list of palindromes by word length
  foundPalindrome.sort();
  // return the largest item in the sorted list
  return sortAscendingByLength(foundPalindrome[0], foundPalindrome[1])
}

function reverseString(string) {
  // create a word reverse word variable equal to an empty string
  string.toLowerCase();
  let reverseWord = ''
  // iterate the string backwards
  for (let i = string.length - 1; i >= 0; i--) {
    // add the current letter to the reverse word variable
    reverseWord += string[i];
  }
  // return the word variable
  return reverseWord
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word.toLowerCase();
  // create a value make it equal to true;
  let confirmedTrue = true;
  // if the word is equal to the reverse of the word
    if (word === reverseString(word)) {
    // return the true value
    return confirmedTrue
    }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES

let test = findLongestPalindrome('I like racecar and civic')
  console.log(test)