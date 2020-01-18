function multiplesOf3and5(number) {
  // Good luck!
  let sum = []
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum.push(i);
    }
  }
  return sum.reduce((a, b) => a + b);
}

multiplesOf3and5(10);
