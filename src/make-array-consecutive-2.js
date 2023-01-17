// Create a function that reads an array of numbers and returns the quantity
// of integers that are not represented in the sequence

function makeArrayConsecutive(statues) {
  let count = 0;
  statues.sort((a, b) => a - b);
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1) {
      count += (statues[i + 1] - statues[i] - 1);
    }
  }
  return count;
}

// Example

makeArrayConsecutive([1, 3, 5, 7, 9]);
// Expected return: 4
