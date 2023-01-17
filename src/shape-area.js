// Create a function that determines the area of a strange shape given an
// n-value that the shape is based on

function shapeArea(n) {
  return Math.pow(n, 2) + Math.pow((n - 1), 2);
}

// Example

shapeArea(3);
// Expected return: 13
