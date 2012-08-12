var prime = 1;

function ehPrimo(n) {


	for ( i = Math.floor(Math.sqrt(n)); i > 1; ( (i%2 == 0) ? i-- : i-=2 ) ) {
		if ( n % i === 0 ){
			return false;
		}
		}

		return true;
}


for( actual = 2; (prime) < 10001; actual++ ) {

	if (actual % 2 !== 0) {

			if( ehPrimo(actual) ){
				prime++;
				last = actual;
			}

	}
}

console.log(last);