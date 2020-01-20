// 2520 is the smallest number that can be divided by each of the 
//numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
    let nums = [];
    
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    // Helper function
    const GCD = (a, b) => {
        if (!b) {
            return a;
        }
        else {
            //console.log('a: ', a, 'b: ', b);
            return GCD(b, a % b);
        }
    };

    //Helper function
    const LCM = (a, b) => ((a * b) / GCD(a, b));

    
    return nums.reduce(LCM);
}

smallestMult(20);


// -------------NOTES--BELOW--------

// Brute force apporach...
function smallestMult(n) {
    let nums = [];
    for (i = 1; i <= n; i++) {
        nums.push(i);
    }
    let max = nums.reduce((a, b) => a * b);
    // console.log(max);
    let min = 0;

    for (let a = 0; a < nums.length - 1; a++) {
        min = + min + nums[a] * nums[nums.length - 1];
    }


    for (let i = min; i < max; i++) {
        console.log(i);
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            //console.log(nums[j], i % nums[j], counter, counter === (nums.length - 1));
            if (i % nums[j] === 0) {
                counter = counter + 1;
                if (counter === (nums.length)) {
                    return i;
                }
            }
            else {
                counter = 0;
                break;
            }
        }
    }
    return n;
}


//smallestMult(10)


// recursive function for gcd and record of possible common divsors
function gcdAndRecord(a, b) {
    let c = a;
    let d = b;
    let record = [];
    if (!b) {
        for (let i = a; i > 0; i--) {
            if (c % i === 0 && d % i === 0) {
                record.push(i);
            }
        }
        return { a, record };
    }
    else {
        console.log('a: ', a, 'b: ', b);
        return gcdAndRecord(b, a % b);
    }
}
