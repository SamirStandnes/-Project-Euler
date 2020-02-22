function sumSquareDifference2(n) {
    // Good luck!
    var t0 = performance.now()
    let arr1 = [];
    let arr2 = [];
    for (let i = 1; i <= n; i++) {
        arr1.push(i);
        arr2.push(Math.pow(i, 2));
    }

    //console.log(arr1, arr2);
    let sumofSquares = arr2.reduce((a, b) => a + b);
    let squareOfSum = arr1.reduce((a, b) => a + b);

    //console.log(sumofSquares, squareOfSum)
    let result = Math.pow(squareOfSum, 2) - sumofSquares;
    var t1 = performance.now()
    console.log(t1 - t0);

    return result; 
}