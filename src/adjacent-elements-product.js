function adjacentElementsProduct(inputArray) {
  let product = inputArray[1] * inputArray[0];
  for (let i = 2; i < inputArray.length; i++) {
    if ((inputArray[i] * inputArray[i - 1]) > product) {
      product = inputArray[i] * inputArray[i - 1];
    }
  }
  return product;
}

// Example

adjacentElementsProduct([2, 6, 10, 8, 4]);
// Expected return: 80;
