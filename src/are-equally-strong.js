// Create a function that takes values of strength for each arm of two people,
// and returns whether the strengths of each person and each of their arms is
// equal

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let equal = false;
  const arms = [yourLeft, yourRight, friendsLeft, friendsRight];
  arms.sort((a, b) => a - b);
  if (yourLeft + yourRight === friendsLeft + friendsRight) {
    equal = true;
  } else {
    return false;
  }
  const yourIndexSum = arms.indexOf(yourLeft) + arms.indexOf(yourRight);
  const friendsIndexSum = arms.indexOf(friendsLeft) + arms.indexOf(friendsRight);
  if ((yourIndexSum > 1 && yourIndexSum < 5) || yourIndexSum === friendsIndexSum) {
    equal = true;
  } else {
    equal = false;
  }
  if (arms[2] === arms[3]) {
    equal = true;
  } else {
    return false;
  }
  return equal;
}

// Example

areEquallyStrong(3, 5, 5, 3);
// Expected return: true
