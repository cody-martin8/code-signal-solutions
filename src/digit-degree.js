// Create a function that takes a number and counts the number of times the
// digits can be added together before the result is a single digit number

function digitDegree(n) {
  let [count, string] = [0, n.toString()];
  while (string.length > 1) {
    string = string.split('').map(x => parseInt(x)).reduce((count, x) => count + x, 0).toString();
    count++;
  }
  return count;
}

// Example

digitDegree(145);
// Expected return: 2
