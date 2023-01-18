// Create a function that checks if the sum of the first half of a number's
// digits equals the sum of the second half of the number's digits

function isLucky(n) {
  const lucky = n.toString().split('');
  let [first, second] = [0, 0];
  for (let i = 0; i < (lucky.length / 2); i++) {
    first += Number(lucky[i]);
    second += Number(lucky[i + lucky.length / 2]);
  }
  return first === second;
}

// Example

isLucky(12342341);
// Expected return: true
