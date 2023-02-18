// Create a function that takes an integer and evaluates what the largest
// possible number would be if one digit was to be taken away

function deleteDigits(n) {
  const arr = n.toString().split('');
  const sumCheck = [];
  for (let i = 0; i < arr.length; i++) {
    const digit = arr[i];
    arr.splice(i, 1);
    sumCheck.push(Number(arr.join('')));
    arr.splice(i, 0, digit);
  }
  return Math.max(...sumCheck);
}

// Example

deleteDigits(152);
// Expected return: 52
