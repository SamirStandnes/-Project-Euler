// palindromic number reads the same both ways. The largest palindrome 
// made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two n-digit numbers.

// Effecient reversal of number for testing for Palindrome
function reverse(num) {
  let result = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    result = (result * 10) + lastDigit;
    num = Math.floor(num / 10);
  }
  return result;
}

function largestPalindromeProduct(n) {
  // Good luck!
  let num = '';
  let result = [];
  for (let i = 0; i < n; i++) {
    num += '9';
  }
  num = parseInt(num, 10);
  if (num.length === 1) {
    return n;
  }
  //console.log(num)

  // function 
  for (let i = 0; i < num; i++) {
    //console.log('i', num-i);
    for (let j = 0; j < num; j++) {
      //console.log('j', num-j);
      let product = (num - j) * (num - i);
      //console.log(product)
      if (product === reverse(product)) {
        result.push(product);
      }
    }
  }
  return Math.max(...result);
}

largestPalindromeProduct(3);
