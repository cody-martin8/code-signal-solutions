// Create a function that compares two strings and counts the number of shared
// characters, including repeats

function commonCharacterCount(s1, s2) {
  let [count, i] = [0, 0];
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  while (i < s1Array.length) {
    if (s2Array.includes(s1Array[i])) {
      s2Array.splice(s2Array.indexOf(s1Array[i]), 1);
      s1Array.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }
  return count;
}

// Example

commonCharacterCount('hello', 'goodbye');
// Expected return: 2
