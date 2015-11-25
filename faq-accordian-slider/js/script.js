$('document').ready(function() {
	$('.que').click(function() {
		//Hide all answers except the one for clicked question.
		$('.ans').not($(this).next()).hide();
		$(this).children('img').toggleClass('rotate');//Rotate the image on click. 
		$(this).next().toggle();
	});
});
