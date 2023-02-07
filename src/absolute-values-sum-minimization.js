// Create a function that iterates through an array and returns the integer that
// produces the smallest sum when adding the absolute value of the differences
// between the selected integer and each other integer in the array

function absoluteValuesSumMinimization(a) {
  const sums = [];
  for (let i = 0; i < a.length; i++) {
    sums.push(a.map(x => Math.abs(x - a[i])).reduce((count, total) => count + total, 0));
  }
  return a[sums.indexOf(Math.min(...sums))];
}

// Example

absoluteValuesSumMinimization([2, 4, 7]);
// Expected return: 4
