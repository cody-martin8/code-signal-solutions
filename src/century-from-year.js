// Create a function that can return the number of the century from a given year

function centuryFromYear(year) {
  const century = year / 100;
  const remainder = century % 1;
  if (remainder === 0) {
    return century;
  } else {
    return century - remainder + 1;
  }
}

// Example

centuryFromYear(1901);
// Expected return: 20
