//Write a JavaScript program to find the area of a triangle where 
//lengths of the three of its sides are 5, 6, 7.  

var side1 = 5
var side2 = 6
var side3 = 7

function calculate(){

	var per = side1 + side2 + side3;
	var calculateSide = Math.sqrt(per*((per-side1)*(per-side2)*(per-side3)));

console.log(calculateSide);

}

calculate();