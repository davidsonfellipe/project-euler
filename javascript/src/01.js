function divided_by_3_5(n){

	var sum = 0;

	while( n-- ) {
		sum += (n % 3 === 0) || (n % 5 === 0) ? n : 0;
	}

	return sum;
}