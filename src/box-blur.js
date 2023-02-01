// Create a function that takes a matrix of integers and applies the box blur
// algorithm, returning a "blurred" matrix

function boxBlur(image) {
  const newArray = [];
  for (let i = 1; i < image.length - 1; i++) {
    const subArray = [];
    for (let n = 1; n < image[0].length - 1; n++) {
      const newImage = [
        image[i - 1][n - 1],
        image[i - 1][n],
        image[i - 1][n + 1],
        image[i][n - 1],
        image[i][n],
        image[i][n + 1],
        image[i + 1][n - 1],
        image[i + 1][n],
        image[i + 1][n + 1]
      ];
      const sum = parseInt(newImage.reduce((count, current) => count + current, 0) / 9);
      subArray.push(sum);
    }
    newArray.push(subArray);
  }
  return newArray;
}

// Example

boxBlur([
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1]
]);
// Expected return: [[1]]
