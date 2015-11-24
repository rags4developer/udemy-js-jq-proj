$('document').ready(function() {
	$('.que').click(function() {
		//Hide all answers except the one for clicked question.
		$('.ans').hide();
		$(this).next().toggle();
	});
});
