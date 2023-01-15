function almostIncreasingSequence(seq) {
  let count = 0;
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] >= seq[i + 1] && seq[i] >= seq[i + 2]) {
      seq.splice(i, 1);
      count++;
    }
    if (seq[i] >= seq[i + 1] && seq[i] < seq[i + 2]) {
      seq.splice(i + 1, 1);
      count++;
    }
  }
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] >= seq[i + 1]) {
      count++;
    }
  }
  return count <= 1;
}

// Example

almostIncreasingSequence([1, 2, 4, 3, 5, 7]);
// Expected return: true
