var number = 600851475143;
var prime = 3;
var last = 0

while( number > 1 ) {

	if( (number % prime) == 0){
		number = number / prime;
		last = prime;
	}
	else{
		prime += 2
	}
}

console.log(last);