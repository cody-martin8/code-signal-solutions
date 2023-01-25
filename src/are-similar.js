// Create a function that checks if two arrays are similar. Similar is if the
// array values match or if they can match after switching one pair of values

function areSimilar(a, b) {
  let count = 0;
  const sumA = a.reduce((add, current) => add + current, 0);
  const sumB = b.reduce((add, current) => add + current, 0);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
    if (!b.includes(a[i]) || !a.includes(b[i]) || sumA !== sumB) {
      return false;
    }
  }
  return count < 3;
}

// Example

areSimilar([1, 2, 3, 4], [1, 3, 2, 4]);
// Expected return: true
