// Create a function that checks whether a given 9x9 matrix is a correct Sudoku
// solution

function sudoku(grid) {
  const boxes = (grid, x, y) => {
    const box = [];
    for (let i = x; i < x + 3; i++) {
      for (let n = y; n < y + 3; n++) {
        box.push(grid[n][i]);
      }
    }
    return box;
  };
  for (let i = 0; i < grid.length; i++) {
    const row = new Set(grid[i]);
    if (row.size !== 9) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    const arr = [];
    for (let n = 0; n < 9; n++) {
      arr.push(grid[n][i]);
    }
    const col = new Set(arr);
    if (col.size !== 9) {
      return false;
    }
  }
  for (let i = 0; i < 7; i += 3) {
    for (let n = 0; n < 7; n += 3) {
      const box = new Set((boxes(grid, n, i)));
      if (box.size !== 9) {
        return false;
      }
    }
  }
  return true;
}

// Example

sudoku([
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5]
]);
// Expected return: true
