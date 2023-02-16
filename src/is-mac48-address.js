// Create a function that evaluates the validity of a given MAC-48 address

function isMac48Address(inputString) {
  const test = inputString.split('-');
  const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const alp = ['A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < test.length; i++) {
    if (test[i].length !== 2) {
      return false;
    }
    if (!num.includes(test[i][0]) && !alp.includes(test[i][0])) {
      return false;
    }
    if (!num.includes(test[i][1]) && !alp.includes(test[i][1])) {
      return false;
    }
  }
  return true;
}

// Example

isMac48Address('01-23-45-67-89-AB');
// Expected return: true
