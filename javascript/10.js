//TODO: resolve using The sieve of Eratosthenes

var actual = 3, tudis = 2;

function ehPrimo(n) {


	for ( i = Math.floor(Math.sqrt(n)); i > 1; ( (i%2 == 0) ? i-- : i-=2 ) ) {
		if ( n % i === 0 ){
			return false;
		}
		}

		return true;
}

for( actual = 2; actual < 2000000; actual++ ) {

	if (actual % 2 !== 0) {

			if(ehPrimo(actual)){
				tudis += actual;
			}

	}
}

console.log(tudis);