// Create a function that evaluates a given string to see if it's in 24-hr time
// format

function validTime(time) {
  const t = time.split(':');
  if (t[0] < 0 || t[0] > 23 || t[1] < 0 || t[1] > 59 || t[1].length !== 2) {
    return false;
  }
  return true;
}

// Example

validTime('13:58');
// Expected return: true
