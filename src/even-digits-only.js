// Create function that returns a boolean for whether the given number contains
// only even digits or not

function evenDigitsOnly(n) {
  return n.toString().split('').every(x => x % 2 === 0);
}

// Example

evenDigitsOnly(24689);
// Expected return: false
