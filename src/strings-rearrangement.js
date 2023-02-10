// Create a function that checks whether an array of strings with same length
// can be rearranged so that each string has exactly one character that's
// different from its neighbor

function stringsRearrangement(inputArray) {
  const permutator = inputArr => {
    const result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          const curr = arr.slice();
          const next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return result;
  };
  const permutation = permutator(inputArray);
  permutation.map(arr => {
    let possible = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      let count = 0;
      for (let n = 0; n < arr[i].length; n++) {
        if (arr[i + 1][n] !== arr[i][n]) {
          count++;
        }
      }
      if (count !== 1) {
        possible += 1;
      }
    }
    if (possible === 0) {
      arr[0] = true;
    }
    return arr;
  }
  );
  const truth = array => array[0] === true;
  return permutation.some(truth);
}

// Example

stringsRearrangement(['ab', 'bb', 'aa']);
// Expected return: true
