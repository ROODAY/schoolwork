$(document).ready(function(){
	$("#1").attr("data-real", $("#1").attr("src"));
    	$("#2").attr("data-real", $("#2").attr("src"));
    	$("#3").attr("data-real", $("#3").attr("src"));
    	$("#4").attr("data-real", $("#4").attr("src"));
	var lol = false;
	var listener = new window.keypress.Listener();
	listener.sequence_combo("g o d k i n g", function() {
		$("#hider").css("margin-top", "0");
		if (!lol) {
			lol = true;
			setTimeout(function(){
				$("#1").attr("src", $("#1").attr("data-lol"));
		    	$("#2").attr("src", $("#2").attr("data-lol"));
		    	$("#3").attr("src", $("#3").attr("data-lol"));
		    	$("#4").attr("src", $("#4").attr("data-lol"));
			}, 500);
		} else {
			lol = false;
			setTimeout(function(){
				$("#1").attr("src", $("#1").attr("data-real"));
		    	$("#2").attr("src", $("#2").attr("data-real"));
		    	$("#3").attr("src", $("#3").attr("data-real"));
		    	$("#4").attr("src", $("#4").attr("data-real"));
			}, 500);
		}
		var sparta = new Audio('../img/sparta.wav'); 
		sparta.volume = 1;
		/*sparta.addEventListener('ended', function() {
		    $("#hider").css("margin-top", "100vh");
		}, false);*/
		sparta.play();
		setTimeout(function(){
			$("#hider").css("margin-top", "-100vh");
		}, 2000);
	}, true);
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
					scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
});