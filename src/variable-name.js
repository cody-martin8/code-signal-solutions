// Create a function that takes a variable name string and returns whether it
// meets the variable name requirements

function variableName(name) {
  const nameArray = name.split('');
  const checkOne = nameArray.filter(char => char.toUpperCase() !== char.toLowerCase());
  const checkTwo = nameArray.filter(char => !isNaN(parseInt(char)));
  const checkThree = nameArray.filter(char => char === '_');
  const checkArray = checkOne.concat(checkTwo, checkThree).sort();
  return (isNaN(parseInt(nameArray[0])) && checkArray.join('') === nameArray.sort().join(''));
}

// Example

variableName('var_1__Int');
// Expected return: true
