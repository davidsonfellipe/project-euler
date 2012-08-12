var i = 1000, sum = 0;

while( i-- ) {
	sum += (i % 3 === 0) || (i % 5 === 0) ? i : 0;
}

console.log(sum);