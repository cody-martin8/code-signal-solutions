// Create a function that determines the max value that you can bring home given
// a weight limit and the weights and values of two different items

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  } else if (Math.max(weight1, weight2) <= maxW) {
    return Math.max(value1, value2);
  } else if (weight1 <= maxW) {
    return value1;
  } else if (weight2 <= maxW) {
    return value2;
  }
  return 0;
}

// Example

knapsackLight(10, 5, 6, 4, 8);
// Expected return: 10
