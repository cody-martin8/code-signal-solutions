// Create a function that determines the largest absolute difference between any
// two adjacent integers in an array

function arrayMaximalAdjacentDifference(inputArray) {
  let difference = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i - 1]) > difference) {
      difference = Math.abs(inputArray[i] - inputArray[i - 1]);
    }
  }
  return difference;
}

// Example

arrayMaximalAdjacentDifference([1, 4, 3, 9]);
// Expected return: 6
