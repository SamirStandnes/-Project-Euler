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