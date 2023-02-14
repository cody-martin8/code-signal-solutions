// Create a function that returns the domain of an email address

function findEmailDomain(address) {
  return address.split('@').pop();
}

// Example

findEmailDomain('hello@example.com');
// Expected return: 'example.com'
