// Create a function that evaluates the strings in an array, and adds
// incrementing suffixes to the string if it is the same as a prior string,
// like the file names on a computer

function fileNaming(names) {
  for (let i = 0; i < names.length; i++) {
    let count = 1;
    for (let n = i + 1; n < names.length; n++) {
      while (names[i] === names[n] &&
        names.slice(0, n).includes(names[n] + `(${count})`)) {
        count++;
      }
      if (names[i] === names[n]) {
        names[n] += `(${count})`;
        count++;
      }
    }
  }
  return names;
}

// Example

fileNaming([
  'doc',
  'doc',
  'image',
  'doc(1)',
  'doc'
]);
// Exapected return: [
//   'doc',
//   'doc(1)',
//   'image',
//   'doc(1)(1)',
//   'doc(2)'
// ]
