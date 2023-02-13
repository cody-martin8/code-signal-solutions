// Create a function that checks a string for the longest prefix of only digits

function longestDigitsPrefix(inputString) {
  let [newString, i] = ['', 0];
  while (!isNaN(parseInt(inputString[i]))) {
    newString += inputString[i];
    i++;
  }
  return newString;
}

// Example

longestDigitsPrefix('123aa1');
// Expected return: '123'
