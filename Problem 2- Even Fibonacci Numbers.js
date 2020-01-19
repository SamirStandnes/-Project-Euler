function fiboEvenSum(n) {
  // You can do it!
  let fibo = [0, 1];
  for (let i = 0; i < n; i++) {
    console.log(i);
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  console.log(fibo)
  return fibo.filter((e) => e % 2 == 0).reduce((a, b) => a + b);
}

fiboEvenSum(10);
