// Create a function that evaluates an array of numbers, and puts together the
// sum of the odd indexed numbers and the sum of the even indexed numbers in an
// array pair

function alternatingSums(a) {
  const [teamOne, teamTwo, sums] = [[], [], []];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOne.push(a[i]);
    } else {
      teamTwo.push(a[i]);
    }
  }
  sums.push(teamOne.reduce((add, current) => add + current, 0));
  sums.push(teamTwo.reduce((add, current) => add + current, 0));
  return sums;
}

// Example

alternatingSums([10, 20, 30, 40, 50, 60]);
// Expected return: [90, 120]
