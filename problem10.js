(function(){
	'use strict';

	main();
	function main(){
		var MAX = 2000000;
		var total = 0;
		
		for(var x = 1; x < MAX; x++){
			if(isPrime(x) === true){
				total += x;
			}
		} // end of for

		console.log(total);
	}// end of main


	// is Prime number with improved logic.
	// checks prime number on the basis of 
	// square-root
	function isPrime(num){
		var limit = Math.sqrt(num);
		limit = Math.floor(limit);

		if(num <= 1){
			return false;
		}

		// if num is 2 or 3, than its a prime number
		if(num === 2 || num === 3){
			return true;
		}
		
		// check if number is divisible by 2, 
		// if yes then its not a prime number.
		if(num%2 === 0){
			return false;
		}
		
		for(var x = 2; x <= limit; x++){
			if(num%x === 0){
				return false;
			}
		}

		return true;
	}; // end of isPrime
})();