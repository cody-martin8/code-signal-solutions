function checkPalindrome(inputString) {
  const letters = inputString.split('');
  const reverse = letters.reverse();
  const reverseString = reverse.join('');
  return (inputString === reverseString);
}

// Example

checkPalindrome('racecar');
// Expected return: true
