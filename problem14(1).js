(function(){
	'use strict';

	main();

	function main(){
		//var MAX = 1000000;
		var MAX = 14;
		var val = MAX - 1;
		var array = [], 
			prevArray = [];	

		while(val >= 1){
			array = [];

			array.push(val);

			createSeries(val,array,prevArray);							
			
			if(prevArray.length < array.length){
				prevArray = array.slice();
			}

			val--;

			console.log(prevArray);											
		} // end of while
		
	} // end of main

	function createSeries(intialNumber,array,prevArray){
		var num = 0;
		
		if(intialNumber%2 === 0){
			num = calForEvenNum(intialNumber);
		}else{
			num = calForOddNum(intialNumber);
		}
		array.push(num);
		
		if(num > 1){
			createSeries(num,array,prevArray);	
		}		
		
	}// end of createSeries

	function calForOddNum(num){
		num = (3 * num) + 1;
		return num;
	}

	function calForEvenNum(num){
		num /= 2;
		return num;
	}
	
})();