// Create a function that evaluates a string of 8-bit binary code for each
// respective ASCII character

function messageFromBinaryCode(code) {
  let bin = '';
  const arr = [];
  for (let i = 0; i < code.length; i++) {
    if ((i + 1) % 8 !== 0) {
      bin += code[i];
    } else {
      bin += code[i];
      arr.push(String.fromCharCode(parseInt(bin, 2)));
      bin = '';
    }
  }
  return arr.join('');
}

// Example

messageFromBinaryCode('010010000110010101101100011011000110111100100001');
// Expected return: 'Hello!'
