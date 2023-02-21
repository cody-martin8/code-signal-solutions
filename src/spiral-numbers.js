// Create a function that takes a number and creates a matrix square with
// dimensions n * n, where the values increment by 1 going in a clockwise spiral
// to the middle

function spiralNumbers(n) {
  const res = Array(n * n).fill(null).map((el, i) => i + 1);
  let m = [];
  let i = 0;
  while (res.length) {
    m.reverse();
    m = m.length ? m[0].map((col, i) => m.map(row => row[i])) : m;
    m.unshift(res.splice(-(Math.floor(i / 2) + 1)));
    i++;
  }
  return m;
}

// Example

spiralNumbers(3);
// Expected return: [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]
