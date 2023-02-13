// Create a function that calculates that number of days that it would take for
// a plant to grow to a desired height given a growth rate during the day and a
// shrink rate during the night

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let [i, count] = [0, 0];
  while (i < desiredHeight) {
    i += upSpeed;
    if (i < desiredHeight) {
      i -= downSpeed;
    }
    count++;
  }
  return count;
}

// Example

growingPlant(100, 10, 910);
// Expected return: 10
