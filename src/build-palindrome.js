// Create a function that can add characters onto the end of a string to make
// the shortest possible palindrome

function buildPalindrome(st) {
  const str = st.split('');
  for (let i = 0; i < str.length; i++) {
    const string = str.concat(st.split('').reverse().slice(st.length - i));
    if (string.join('') === string.reverse().join('')) {
      return string.join('');
    }
  }
}

// Example

buildPalindrome('abcdc');
// Expected return: 'abcdcba'
