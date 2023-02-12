// Create a function that searches a string for the first digit

function isDigit(inputString) {
  const isTrue = element => element === true;
  const truth = inputString.split('').map(x => !isNaN(parseInt(x)));
  return inputString[truth.findIndex(isTrue)];
}

// Example

isDigit('abcde1ghijk');
// Expected return: '1'
