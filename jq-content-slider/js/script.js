/*Ensures all the html and css code is loaded by the browser before we execute
any js code.*/

$(document).ready(function() {
	//alert("Your webpage is fully loaded!");
	var sliding_speed = 500; /*The time (millisecond) taken to show the next slide*/
	var autoswitch = true; /*If you want the slides to be changed automatically*/
	var autoswitch_speed = 4000; /*milliseconds*/
	
	//Add the class 'active' to the first slide only.
	$('.slide').first().addClass('active');

	//Hide all slides, but...
	$('.slide').hide();
	
	//...show only the first slide
	$('.active').show();
	
	$('#next').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive'); /*'Hide the currently active slide and mark it as oldActive so that you can go back to it using the previous button.'*/
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		}else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').hide();
		$('.active').show();
	});
	
}); 

