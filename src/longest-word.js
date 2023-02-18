// Create a function that evaluates a string for the longest word

function longestWord(text) {
  let count = 0;
  const words = [];
  const ascii = char => (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) || (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91);
  if (text.split('').every(ascii)) {
    return text;
  }
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if ((code > 96 && code < 123) || (code > 64 && code < 91)) {
      count++;
      if (i === text.length - 1) {
        i++;
        words.push(text.slice(i - count, i));
      }
    } else {
      words.push(text.slice(i - count, i));
      count = 0;
    }
  }
  return words.sort((a, b) => b.length - a.length)[0];
}

// Example

longestWord('A random collection of long words');
// Expected return: 'collection'
