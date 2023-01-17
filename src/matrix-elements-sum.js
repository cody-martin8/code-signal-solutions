// Create a function that returns the sum of the numbers that are not located
// below a 0 in the rectangular matrix.

function matrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let n = 0; n < matrix.length; n++) {
      if (matrix[n][i] !== 0) {
        count += matrix[n][i];
      } else {
        n = matrix.length;
      }
    }
  }
  return count;
}

// Example

matrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]);
// Expected return: 9
