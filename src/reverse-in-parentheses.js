// Create a function that evaluates a string, reverses each sequence that is
// held within parentheses (starting with the innermost parentheses), and
// removes the parentheses.

function reverseInParentheses(inputString) {
  const stringArray = inputString.split('');
  let [indexOne, indexTwo] = [null, null];
  let reverseArray = [];
  while (stringArray.includes('(')) {
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === '(') {
        indexOne = i;
      }
      if (stringArray[i] === ')') {
        indexTwo = i;
        reverseArray = stringArray.slice(indexOne, indexTwo).join('').split('').reverse();
        reverseArray.pop();
        reverseArray = reverseArray.join('');
        stringArray.splice(indexOne, indexTwo - indexOne + 1, reverseArray);
        break;
      }
    }
  }
  return stringArray.join('');
}

// Example

reverseInParentheses('foo(bar)baz');
// Expected return: 'foorabbaz'
