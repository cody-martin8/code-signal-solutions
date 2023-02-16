// Create a function to check an array of candidates to see which ones still
// have a chance to win the election with the given number of remaining votes

function electionsWinners(votes, k) {
  const max = Math.max(...votes);
  const numOfMax = votes.filter(vote => vote === max).length;
  return votes.reduce((acc, v) => acc + ((v === max && numOfMax === 1) || v + k > max ? 1 : 0), 0);
}

// Example

electionsWinners([2, 3, 5, 2], 3);
// Expected return: 2
