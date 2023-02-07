// Create a function that evaluates a set of chessboard coordinates and
// determines if they are the same color

function chessBoardCellColor(cell1, cell2) {
  const odd = ['A', 'C', 'E', 'G'];
  const even = ['B', 'D', 'F', 'H'];
  const colorOne = ((odd.includes(cell1[0]) && cell1[1] % 2 !== 0) ||
    (even.includes(cell1[0]) && cell1[1] % 2 === 0));
  const colorTwo = ((odd.includes(cell2[0]) && cell2[1] % 2 !== 0) ||
    (even.includes(cell2[0]) && cell2[1] % 2 === 0));
  return colorOne === colorTwo;
}

// Example

chessBoardCellColor('A1', 'C3');
// Expected return: true
