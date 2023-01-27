// Create a function that evaluates a string to see if the characters can be
// rearranged to create a palindrome

function palindromeRearranging(inputString) {
  let count = 0;
  const stringArray = inputString.split('').sort();
  if (stringArray.length % 2 === 0) {
    for (let i = 0; i < stringArray.length; i++) {
      if (i % 2 === 0 && stringArray[i] !== stringArray[i + 1]) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== stringArray[i + 1] && stringArray[i + 1] !== undefined) {
      count++;
    }
  }
  return count < stringArray.length / 2;
}

// Example

palindromeRearranging('aabbaaccbb');
// Expected return: true
