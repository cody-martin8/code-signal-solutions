// Create a function that takes an array of strings (where each string has the
// same number of characters) and adds a "border" of asterisks.

function addBorder(picture) {
  for (let i = 0; i < picture.length; i++) {
    const array = picture[i].split('');
    array.push('*');
    array.unshift('*');
    picture[i] = array.join('');
  }
  const top = '*'.repeat(picture[0].length);
  picture.unshift(top);
  picture.push(top);
  return picture;
}

// Example

addBorder([
  'abc',
  'def'
]);
// Expected return: ['*****',
//                   '*abc*',
//                   '*def*',
//                   '*****']
