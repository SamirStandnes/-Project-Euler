function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;	
}

function nthPrime(n) {
	let prime = [] 
	for (var i = 2; prime.length < n; i++){
		if (isPrime(i)) {
		//console.log(i, ' er ', isPrime(i));	
		prime.push(i);
		}
		else{
			continue;
		}
	}
	console.log(prime[prime.length-1]);
	return prime[prime.length-1];
}

nthPrime(10001);


function isPrime2(num) {
	let t0 = performance.now();
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			let t2 = performance.now();
    		console.log(t2 - t0);
			return false;
		}
	}
	let t1 = performance.now();
    console.log(t1 - t0);
	return true;	
}

function isPrime3(num) {
  let t0 = performance.now();
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    let t1 = performance.now();

    console.log(t1 - t0);
    return prime;
}






/*

		if ( i % 2 != 0) {
			//console.log('prime b', i);
			counter += 1;
			console.log('counter', counter, i);
			if (counter == n) {
				console.log(counter);
				console.log(i);
				return i;
			}
		}


*/