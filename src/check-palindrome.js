// Create a function that can determine if a given word is a palindrome

function checkPalindrome(inputString) {
  const letters = inputString.split('');
  const reverse = letters.reverse();
  const reverseString = reverse.join('');
  return (inputString === reverseString);
}

// Example

checkPalindrome('racecar');
// Expected return: true
