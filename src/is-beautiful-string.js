function isBeautifulString(inputString) {
  const beaut = inputString.split('').sort();
  for (let i = 0; i < beaut.length; i++) {
    if (beaut[i].startsWith(beaut[i + 1])) {
      beaut[i] += beaut[i + 1];
      beaut.splice((i + 1), 1);
      i--;
    }
  }
  for (let i = 1; i < beaut.length; i++) {
    if (!beaut[0].includes('a')) {
      return false;
    }
    if (beaut[i - 1].charCodeAt(0) !== (beaut[i].charCodeAt(0) - 1)) {
      return false;
    }
    if (beaut[i - 1].length < beaut[i].length) {
      return false;
    }
  }
  return true;
}

// Example

isBeautifulString('beautiful');
// Expected return: false
