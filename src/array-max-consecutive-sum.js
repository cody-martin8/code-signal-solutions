// Create a function that finds the highest sum between "k" consecutive integers
// in an array

function arrayMaxConsecutiveSum(inputArray, k) {
  const sum = [];
  for (let i = 0; i + k <= inputArray.length; i++) {
    let newSum = 0;
    for (let n = 0; n < k; n++) {
      newSum += inputArray[i + n];
    }
    sum.push(newSum);
  }
  return Math.max(...sum);
}

// Example

arrayMaxConsecutiveSum([1, 3, 5, 7, 9, 1]);
// Expected return: 21
