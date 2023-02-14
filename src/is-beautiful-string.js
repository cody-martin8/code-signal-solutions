function isBeautifulString(inputString) {
  const beaut = inputString.split('').sort();
  for (let i = 0; i < beaut.length; i++) {
    if (beaut[i].startsWith(beaut[i + 1])) {
      beaut[i] += beaut[i + 1];
      beaut.splice((i + 1), 1);
      i--;
    }
  }
  if (!beaut[0].includes('a')) {
    return false;
  }
  for (let i = 0; i < beaut.length - 1; i++) {
    if (beaut[i].charCodeAt(0) !== (beaut[i + 1].charCodeAt(0) - 1)) {
      return false;
    }
    if (beaut[i].length < beaut[i + 1].length) {
      return false;
    }
  }
  return true;
}

// Example

isBeautifulString('beautiful');
// Expected return: false
