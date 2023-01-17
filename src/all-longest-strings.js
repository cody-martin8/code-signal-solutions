// Create a function that determines the length of the longest string in an
// array, and return an array of all strings that match that length

function allLongestStrings(inputArray) {
  let length = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > length) {
      length = inputArray[i].length;
    }
  }
  return inputArray.filter(x => x.length === length);
}

// Example

allLongestStrings(['bye', 'later', 'hello', 'adieu', 'adios', 'hi']);
// Expected return: ['later', 'hello', 'adieu', 'adios']
