// Create a function that can calculate the number of years it would take to
// reach a given threshold by increasing a given deposit amount at a given
// interest rate

function depositProfit(deposit, rate, threshold) {
  let count = 0;
  while (deposit < threshold) {
    deposit += deposit * (rate / 100);
    count++;
  }
  return count;
}

// Example

depositProfit(100, 20, 170);
// Expected return: 3
