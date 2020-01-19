function largestPrimeFactor(number) {
  let result = [1];
  for (let i = 1; i < number; i++) {
    if (result.reduce((a, b) => a * b) === number) {
      return result[result.length - 1];
    }
    else if (number % i === 0) {
      result.push(i);
    }
    else {
      continue;
    }
    //console.log(result, result.reduce((a,b) => a*b));
  }
  return number;
}