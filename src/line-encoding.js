// Create a function that evaluates a string of characters, counts characters
// that are adjacent, and replaces the stretch of adjacent characters with the
// number of characters followed by a single instance of that character

function lineEncoding(s) {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i + 1]) {
      arr[i] += arr[i + 1];
      arr.splice(i + 1, 1);
      i--;
    }
  }
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i].length > 1 ? arr[i].length + arr[i][0] : arr[i][0]);
  }
  return ans.join('');
}

// Example

lineEncoding('aabbbc');
// Expected return: '2a3bc'
