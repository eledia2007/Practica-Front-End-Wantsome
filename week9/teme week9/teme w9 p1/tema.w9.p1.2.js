// 1----------------------------------------------------------------------------------

function customMap(array, callback) {
	var arr = [];
	for(var index in array){
		arr.push(callback(array[index]));
	}
	return arr;
}

function increment(num){
  return num+1;
}
function double(num){
  return num*2;
}
function square(num){
  return num*num;
}
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(customMap(randomArray, increment));  
// Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 
//in the console
console.log(customMap(randomArray, double));  
// Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(customMap(randomArray, square));  
// Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2--------------------------------------------------------------------------------------------

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, 
filter the items which are divisible by 3, etc... )
*/
var filter = function(array, callback) {
  var filteredArray = [];
  for (var i = 0; i<array.length; i++) {
    var newItem = array[i];
    if (callback(newItem)) {
      filteredArray.push(newItem);
    }
  }
  return filteredArray;
};

function dividedByThree(num){
  if (num % 3 === 0){
    return num;
  }
}  
function oddNumbers(num){
  if (num % 2 === 0){
    return num;
  }
}  
function greaterThan5(num){
  if (num > 5){
    return num;
  }
}  
function dividedByFourAndTwo(num){
  if (num % 4 ===0 && num % 2 ===0){
    return num;
  }
}  
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
console.log(filter(randomArray, dividedByThree ));
console.log(filter(randomArray, oddNumbers ));
console.log(filter(randomArray, greaterThan5 ));
console.log(filter(randomArray, dividedByFourAndTwo ));
// 3 ------------------------------------------------------------------------------------------------------------------

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/
function multipleCallbacks (myObject, callback1, callback2){
  var myObject = {status: ['success', 'error']};
  var keyValue = Object.values(myObject.status);
  for (let i=0; i<keyValue.length; i++){
 if (keyValue[i] === 'success'){
     return callback1;
  } else return callback2;
}
}
