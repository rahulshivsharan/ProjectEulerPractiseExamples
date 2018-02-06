(function(){
	'use strict';

	mainFunction01();
	mainFunction02();

	
	function mainFunction01(){
		var k = 100;

		// sum for square of first 100 numbers
		var sum1 = (k * ((2 * k) + 1) * (k + 1))/6;
		var sum2 = (k * (k + 1)/2);
		sum2 = Math.pow(sum2,2);

		console.log("sum1 ",sum1);
		console.log("sum2 ",sum2);

		var diff = sum1 - sum2;
		console.log("sum1 ",sum1);
		console.log("sum2 ",sum2);
		diff = sum2 - sum1;
		console.log("diff ",diff);
	}


	function mainFunction02(){
		var k = 100, 
			i = 1;
		
		var sum1 = 0, 
			sum2 = 0, 
			diff = 0;		

		while(i <= k){			
			sum1 += Math.pow(i,2);
			sum2 += i; 
			i++;
		} // end while

		sum2 = Math.pow(sum2,2);

		console.log("sum1 ",sum1);
		console.log("sum2 ",sum2);
		
		diff = sum1 - sum2;
		
		console.log("diff ",diff);

		diff = sum2 - sum1;
		console.log("diff ",diff);
	}
})();