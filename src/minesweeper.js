// Create a function that evaluates a matrix of truths and falses as if they
// were a game of minesweeper, and the truths are the bombs

function minesweeper(matrix) {
  const mines = [];
  for (let i = 0; i < matrix.length; i++) {
    const rowArray = [];
    for (let n = 0; n < matrix[0].length; n++) {
      const bombCheck = [];
      if (i === 0) {
        if (n === 0) {
          bombCheck.push(
            matrix[i][n + 1],
            matrix[i + 1][n],
            matrix[i + 1][n + 1]
          );
        }
        if (n > 0 && n < matrix[0].length - 1) {
          bombCheck.push(
            matrix[i][n - 1],
            matrix[i][n + 1],
            matrix[i + 1][n - 1],
            matrix[i + 1][n],
            matrix[i + 1][n + 1]
          );
        }
        if (n === matrix[0].length - 1) {
          bombCheck.push(
            matrix[i][n - 1],
            matrix[i + 1][n - 1],
            matrix[i + 1][n]
          );
        }
      }
      if (i > 0 && i < matrix.length - 1) {
        if (n === 0) {
          bombCheck.push(
            matrix[i - 1][n],
            matrix[i - 1][n + 1],
            matrix[i][n + 1],
            matrix[i + 1][n],
            matrix[i + 1][n + 1]
          );
        }
        if (n > 0 && n < matrix[0].length - 1) {
          bombCheck.push(
            matrix[i - 1][n - 1],
            matrix[i - 1][n],
            matrix[i - 1][n + 1],
            matrix[i][n - 1],
            matrix[i][n + 1],
            matrix[i + 1][n - 1],
            matrix[i + 1][n],
            matrix[i + 1][n + 1]
          );
        }
        if (n === matrix[0].length - 1) {
          bombCheck.push(
            matrix[i - 1][n - 1],
            matrix[i - 1][n],
            matrix[i][n - 1],
            matrix[i + 1][n - 1],
            matrix[i + 1][n]
          );
        }
      }
      if (i === matrix.length - 1) {
        if (n === 0) {
          bombCheck.push(
            matrix[i - 1][n],
            matrix[i - 1][n + 1],
            matrix[i][n + 1]
          );
        }
        if (n > 0 && n < matrix[0].length - 1) {
          bombCheck.push(
            matrix[i - 1][n - 1],
            matrix[i - 1][n],
            matrix[i - 1][n + 1],
            matrix[i][n - 1],
            matrix[i][n + 1]
          );
        }
        if (n === matrix[0].length - 1) {
          bombCheck.push(
            matrix[i - 1][n - 1],
            matrix[i - 1][n],
            matrix[i][n - 1]
          );
        }
      }
      let count = 0;
      for (let x = 0; x < bombCheck.length; x++) {
        if (bombCheck[x]) {
          count++;
        }
      }
      rowArray.push(count);
    }
    mines.push(rowArray);
  }
  return mines;
}

// Example

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]]);
// Expected return: [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]
