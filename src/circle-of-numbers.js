// Create a function that can evaluate a circle of numbers with size n, and
// determine the radially opposite number from firstNumber

function circleOfNumbers(n, firstNumber) {
  const diff = n / 2;
  if (firstNumber >= diff) {
    return firstNumber - diff;
  } else {
    return firstNumber + diff;
  }
}

// Example

circleOfNumbers(6, 2);
// Expected return: 5
