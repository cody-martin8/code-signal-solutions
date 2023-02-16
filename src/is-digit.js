// Create a function that evaluates wheteher a given symbol is a digit

function isDigit(symbol) {
  return !isNaN(parseInt(symbol));
}

// Example

isDigit('3');
// Expected return: true
