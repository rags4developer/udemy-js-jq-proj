/*Ensures all the html and css code is loaded by the browser before we execute
any js code.*/

$(document).ready(function() {
	//alert("Your webpage is fully loaded!");
	var sliding_speed = 500; /*The time (millisecond) taken to show the next slide*/
	var autoswitch = true; /*If you want the slides to be changed automatically*/
	var autoswitch_speed = 4000; /*milliseconds*/
	
	//Add the class 'active' to the first slide only.
	$('.slide').first().addClass('active');
}); 

