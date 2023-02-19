// Create a function that can find the smallest positive integer where the
// product of the digits equals the given number

function digitsProduct(product) {
  let num = product;
  const arr = [];
  if (num === 0) {
    return 10;
  }
  if (num < 10) {
    return num;
  }
  for (let i = 9; i > 1; i--) {
    while (num % i === 0) {
      arr.push(i);
      num /= i;
    }
    if (i === 2 && arr.length === 0) {
      return -1;
    }
  }
  return arr.reduce((x, n) => x * n) === product ? Number(arr.sort().join('')) : -1;
}

// Example

digitsProduct(12);
// Expected return: 26
