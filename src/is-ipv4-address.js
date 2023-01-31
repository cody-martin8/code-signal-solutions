function isIPv4Address(inputString) {
  const ipCheck = inputString.split('.');
  if (ipCheck.length !== 4) {
    return false;
  }
  for (let i = 0; i < ipCheck.length; i++) {
    const number = parseInt(ipCheck[i]);
    if (ipCheck[i] < 0 || ipCheck[i] > 255) {
      return false;
    }
    if (number === ipCheck[i]) {
      return false;
    }
    if (!Number.isInteger(ipCheck[i])) {
      return false;
    }
  }
  return true;
}

// Example

isIPv4Address('172.16.254.1');
// Expected return: true
