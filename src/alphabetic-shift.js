// Create a function that replaces each character in a string with the next
// letter in the English alphabet

function alphabeticShift(inputString) {
  let newString = '';
  for (let i = 0; i < inputString.length; i++) {
    let code = inputString.charCodeAt(i);
    if (code === 122) {
      code = 97;
    } else {
      code++;
    }
    newString += String.fromCharCode(code);
  }
  return newString;
}

// Example

alphabeticShift('crazy');
// Expected return: 'dsbaz'
