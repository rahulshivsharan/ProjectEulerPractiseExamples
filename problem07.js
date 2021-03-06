(function(){
	'use strict';

	mainFunction();
	function mainFunction(){
		var isPrime = false, 
			primeNum = 0, x = 0;

		
		for(var i = 1; i <= 10001; i++){

			do{
				
				if(x !== 1 && x !== 2 && x !== 3){
					//isPrime = isPrimeNumber(x);
					isPrime = isPrimeImproved(x);
					if(isPrime === false){
						x++;
					}
				}else if(x === 2 || x === 3){
					isPrime = true;					
				}else{
					x++;
				}
			}while(isPrime === false);

			if(i === 10001){
				console.log(i," Prime Number is ",x);	
			}
			
			x++;
		} // end of for
		
		
		
	} // end of mainFunction

	function isPrimeNumber(num){
		var halfNum = num/2;
		halfNum = parseInt(halfNum);
		
		// check if number is divisible by 2, 
		// if yes then its not a prime number.
		if(num%2 === 0){
			return false;
		}
		

		do{
			// if number is divisible by its half value, 
			// if yes, than its not prime number	
			if(num%halfNum === 0){
				return false;
			}

		}while(--halfNum >= 2); // reduce the half-value by 1 and continue

		return true;
	} // end of isPrimeNumber


	// is Prime number with improved logic.
	// checks prime number on the basis of 
	// square-root
	function isPrimeImproved(num){
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
	};


	function getCommandLineVariables(){
		var arg_array = process.argv.slice(2);

		if(arg_array.length !== 1){
			throw new Error("Pass a number");
		}
		
		
		return parseInt(arg_array[0]);
	} // end of getCommandLineVariables	
})();