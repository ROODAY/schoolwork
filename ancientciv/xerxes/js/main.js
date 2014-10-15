$(document).ready(function(){
	$("#navbutton").mouseenter(function(){
		$(this).css("color", "#ccc");
		$("nav").css("right", "0vw");
	});
	$("nav").mouseleave(function(){
		$("#navbutton").css("color", "#333");
		$(this).css("right", "-20vw");
	});
});