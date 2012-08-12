var number = 1;
var range = 20;

function divisibleByAll (number, range) {

	for ( var i = range; i > 0; i--) {
		if( (number % i ) !== 0 ) return false;
	}

	return true;
}

while( ! divisibleByAll(number, range) ) {

	number++;

}

console.log(number);