// Create a function that sorts all non-(-1) numbers in ascending order while
// maintaining the positions of the (-1) numbers

function sortByHeight(a) {
  const treeArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treeArray.push(i);
    }
  }
  const sorted = a.sort((a, b) => a - b).slice(treeArray.length);
  for (let i = 0; i < a.length + 1; i++) {
    if (treeArray.includes(i)) {
      sorted.splice(i, 0, -1);
    }
  }
  return sorted;
}

// Example

sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// Expected return: [-1, 150, 160, 170, -1, -1, 180, 190]
