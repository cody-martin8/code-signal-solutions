// Create a function that iterates through an array of integers to find what
// sequence of multiples can avoid each integer in the given array

function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  let x = 2;
  while (x < 10000) {
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] % x !== 0) {
        count++;
      } else {
        i = inputArray.length;
      }
    }
    if (count === inputArray.length) {
      return x;
    } else {
      x++;
    }
  }
}

// Example

avoidObstacles([3, 7, 15, 4, 45]);
// Expected return: 6
