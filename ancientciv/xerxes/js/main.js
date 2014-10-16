$(document).ready(function(){
	$("#navbutton").mouseenter(function(){
		$(this).css("color", "#ccc");
		$("nav").css("right", "0vw");
	});
	$("nav").mouseleave(function(){
		$("#navbutton").css("color", "#333");
		$(this).css("right", "-20vw");
	});
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top - 51
					}, 1000);
					return false;
				}
			}
		});
	});
});