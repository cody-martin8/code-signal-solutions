// Create a function that evaluates an array of integers for the number of times
// a number needs to be increased by 1 in order to create an increasing sequence

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    while (inputArray[i] >= inputArray[i + 1]) {
      inputArray[i + 1] += 1;
      count++;
    }
  }
  return count;
}

// Example

arrayChange([1, 0, 2, 1]);
// Expected return: 6
