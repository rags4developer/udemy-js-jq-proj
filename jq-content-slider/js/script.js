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
	
	//Code to execute when next button is pressed.
	$('#next').on('click', function(){
		
		/* Remove the active marking for current slide and mark the current slide as oldActive.
		  oldActive will help us to access the next slide by referencing the currently displayed one.
		*/
		$('.active').removeClass('active').addClass('oldActive');
			
		/* Mark the following slide class "active. The following slide will be made current/visible 
		in the next step*/
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		}else {
			$('.oldActive').next().addClass('active');
		}
		
		/*Remove the oldActive marker from current slide. The slide which you want to change to will become
		the oldActive one when the button is pressed.
		*/
		$('.oldActive').removeClass('oldActive');
		
		/*Hide all slides and then display only the one we marked active*/
		$('.slide').hide();
		$('.active').show();
		
		//Animation for changing slides.
		$('.slide').fadeOut(sliding_speed);
		$('.active').fadeIn(sliding_speed);
	});
	
	//Code to execute when previous button is pressed.	
	$('#prev').on('click', function(){
		
		/* Remove the active marking for current slide and mark the current slide as oldActive.
		  oldActive will help us to access the next slide by referencing the currently displayed one.
		*/
		$('.active').removeClass('active').addClass('oldActive');
			
		/* Mark the following slide class "active. The following slide will be made current/visible 
		in the next step*/
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		}else {
			$('.oldActive').prev().addClass('active');
		}
		
		/*Remove the oldActive marker from current slide. The slide which you want to change to will become
		the oldActive one when the button is pressed.
		*/
		$('.oldActive').removeClass('oldActive');
		
		/*Hide all slides and then display only the one we marked active*/
		$('.slide').hide();
		$('.active').show();
		
		//Animation for changing slides.
		$('.slide').fadeOut(sliding_speed);
		$('.active').fadeIn(sliding_speed);
	});	
		
});

