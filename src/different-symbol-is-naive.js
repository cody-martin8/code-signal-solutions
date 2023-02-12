// Create a function that counts the number of unique characters in a string

function differentSymbolIsNaive(s) {
  const chars = [];
  for (let i = 0; i < s.length; i++) {
    if (!chars.includes(s[i])) {
      chars.push(s[i]);
    }
  }
  return chars.length;
}

// Example

differentSymbolIsNaive('hello');
// Expected return: 4
