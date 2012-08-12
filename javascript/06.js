var lastNumber = 100;


function pa(last){

	return  (1 + last) * (last / 2)
 }

 function px(last){

 	var sum = 0;

 	for( var i = 1; i <== last; i++ ){

 		sum += i * i;

 	}

 	return sum;
 }

 console.log(Math.pow( pa(lastNumber), 2 ) - px(lastNumber));