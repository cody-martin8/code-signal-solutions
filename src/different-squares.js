// Create a function that checks a matrix for the number of unique 2x2 squares

function differentSquares(matrix) {
  const sq = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      const arr = [matrix[i][n], matrix[i][n + 1], matrix[i + 1][n], matrix[i + 1][n + 1]];
      if (arr.every(value => !isNaN(value))) {
        if (!sq.includes(arr.join(''))) {
          sq.push(arr.join(''));
        }
      }
    }
  }
  return sq.length;
}

// Example

differentSquares([
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1]
]);
// Expected return: 6
