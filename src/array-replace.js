// Create function that iterates through each value in an array. If a value
// matches the elemToReplace, then it is replaced with substitutionElem

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

// Example

arrayReplace([1, 2, 1], 1, 3);
// Expected return: [3, 2, 3]
