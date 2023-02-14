// Create a function that evaluates the locations of a bishop and a pawn on a
// chessboard to see if the bishop can take the pawn

function bishopAndPawn(bishop, pawn) {
  return (Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0)) === Math.abs(bishop[1] - pawn[1]));
}

// Example

bishopAndPawn('a1', 'c3');
// Expected return: true
