/*

Project Euler: Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

*/
function sumSquareDifference1(n) {
  // Good luck!
var t0 = performance.now()
let arr = [];
for (let i = 0; i <= n; i++) {
  arr.push(i);
}
//console.log(arr);
let t = 0;
for (let i = 0; i < arr.length; i++) {
	t  = t + Math.pow(arr[i],2);
     //console.log(t);
}
  let result = Math.pow(arr.reduce((a, b) => a + b), 2) - t;   
  var t1 = performance.now()
  console.log(t1 - t0);

 return result;

}