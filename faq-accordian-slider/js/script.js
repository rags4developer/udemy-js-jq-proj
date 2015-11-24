$('document').ready(function() {
	$('.que').click(function() {
		//Hide all answers except the one for clicked question.
		$('.ans').not($(this).next()).hide();
		$(this).next().toggle();
	});
});
