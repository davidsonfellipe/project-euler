var sum = 0, prev = 1, actual = 1;

while( actual < 4000000 ) {

	sum += (actual % 2 === 0) ? actual : 0;

	swap = actual;
	actual = prev + actual;
	prev = swap;

}

console.log(sum);