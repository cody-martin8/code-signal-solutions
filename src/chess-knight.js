// Create a function that checks coordinates of a Knight piece in chess to
// evaluate how many moves it can make

function chessKnight(cell) {
  let count = 8;
  const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const num = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const check = cell.split('');
  const alpInd = alp.indexOf(check[0]);
  const numInd = num.indexOf(check[1]);
  if (alpInd === 0 || alpInd === 7) {
    count = count - 4;
  }
  if (alpInd === 1 || alpInd === 6) {
    count = count - 2;
  }
  if (numInd === 0 || numInd === 7) {
    count = count - 4;
  }
  if (numInd === 1 || numInd === 6) {
    count = count - 2;
  }
  if ((alpInd + numInd === 1 || alpInd + numInd === 13) && count === 2) {
    count = 3;
  }
  if (count === 0) {
    count = 2;
  }
  return count;
}

// Example

chessKnight('a1');
// Expected return: 2
