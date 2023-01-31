// Create a function that evaluates a string to check if it passes the IPv4
// naming rules, where there are four numbers separated by '.' and each number
// is between 0 and 255

function isIPv4Address(inputString) {
  const ipCheck = inputString.split('.');
  if (ipCheck.length !== 4) {
    return false;
  }
  for (let i = 0; i < ipCheck.length; i++) {
    if ((ipCheck[i] < 1 && ipCheck[i] !== '0') || ipCheck[i] > 255 || ipCheck[i] === '' || parseFloat(ipCheck[i]).toString() !== ipCheck[i]) {
      return false;
    }
  }
  return true;
}

// Example

isIPv4Address('172.16.254.1');
// Expected return: true
