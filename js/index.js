$(function(){
	$('#menBox').fullpage({
		navigation: false,
		anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7']
	})

	$('.bd1 a').click(function(){
		$.fn.fullpage.moveTo(2);
	});
	$('.bd2 a').click(function(){
		$.fn.fullpage.moveTo(3);
	});
	$('.bd3 a').click(function(){
		$.fn.fullpage.moveTo(4);
	});
	$('.bd4 a').click(function(){
		$.fn.fullpage.moveTo(5);
	});
	$('.bd5 a').click(function(){
		$.fn.fullpage.moveTo(6);
	});
	$('#promos6 a').click(function(){
		$.fn.fullpage.moveTo(7);
	});

	$(".screenshots").roundabout({
		tilt:.6,
		minScale:.6,
		maxScale:1,
		minOpacity:1,
		autoplay:!0,
		autoplayDuration:2e3,
		autoplayPauseOnHover:!0
	});

});
