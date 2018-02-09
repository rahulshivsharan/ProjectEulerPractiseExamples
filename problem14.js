(function(){
	'use strict';

	main();

	function main(){
		//var MAX = 1000000;
		var MAX = 14;
		var val = MAX - 1;
		var array = [], 
			prevArray = [],
			slicedArray = undefined,
			searchedIndex = 0,
			flag = false;

		while(val >= 1){
			array = [];

			array.push(val);

			createSeries(val,array,prevArray);							
			console.log("array ",array);
			console.log("prevArray ",prevArray);	
			if(prevArray.length < array.length){
				prevArray = array.slice();
			}

			val--;							
		} // end of while
						
	} // end of main

	function createSeries(intialNumber,array,prevArray){
		var num = 0, 
			flag = false, 
			searchedIndex = 0, 
			slicedArray = undefined,
			concatedArray = undefined;
		
		if(intialNumber%2 === 0){
			num = calForEvenNum(intialNumber);
		}else{
			num = calForOddNum(intialNumber);
		}
		array.push(num);
		
		flag = isDataAlreadyProcessed(prevArray,array);

		if(flag === false && num > 1) {
			createSeries(num,array,prevArray);
		}else{
			searchedIndex = prevArray.indexOf(num);
			slicedArray = prevArray.slice(++searchedIndex,prevArray.length);			
			concatedArray = array.concat(slicedArray);
			array = concatedArray.slice();
		}
	} // end of createSeries

	function calForOddNum(num){
		num = (3 * num) + 1;
		return num;
	}

	function calForEvenNum(num){
		num /= 2;
		return num;
	}

	function isDataAlreadyProcessed(prevArray,array){
		var lastIndex = array.length - 1;
		var lastNum = array[lastIndex];
		var index = prevArray.indexOf(lastNum);
		var flag = false;
		
		if(index !== -1 && index < lastIndex){
			flag = true;
		}

		return flag;
	} // end of isDataAlreadyProcessed
})();