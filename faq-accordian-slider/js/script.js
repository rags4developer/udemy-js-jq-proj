$('document').ready(function() {
	$('.que').toggle(function() {
		$(this).next().css("display", "inline");
	}, function() {
		$(this).next().css("display", "none");
	});
});
