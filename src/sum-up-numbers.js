// Create a function that sorts out the numbers in a string and adds them
// together, not ignoring that some of the number are multiple digits

function sumUpNumbers(inputString) {
  const arr = inputString.split('');
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) && !isNaN(arr[i + 1])) {
      arr[i] = ' ';
    } else if (isNaN(arr[i]) && isNaN(arr[i + 1])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join('').split(' ').map(char => Number(char)).reduce((count, n) => count + n, 0);
}

// Example

sumUpNumbers('2 apples, 12 oranges');
// Expected return: 14
