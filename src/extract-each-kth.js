// Create a function that iterates through an array and removes every Kth element

function extractEachKth(inputArray, k) {
  return inputArray.filter((x, i) => (i + 1) % k);
}

// Example

extractEachKth([1, 2, 3, 4, 5, 6], 2);
// Expected return: [1, 3, 5]
