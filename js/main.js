$(document).on('scroll',function () {
	var scrollTop = $(document).scrollTop();
	if( scrollTop < 0 )return;

	if( navigator.userAgent.match(/(iPod|iPhone|iPad)/) )return;

	$('.daifuku.one').css('transform','translateY('+  scrollTop*0.3+'px');
	$('.daifuku.two').css('transform','translateY('+  scrollTop*0.2+'px');
	$('.daifuku.three').css('transform','translateY('+ -scrollTop*0.2+'px');

	$('.logo-a').css('transform','translateY('+ -scrollTop*0.7+'px');
	$('.logo-b').css('transform','translateY('+ -scrollTop*0.5+'px');

	$('.star').each(function(){
		var distance = $(this).data('distance');
		$(this).css('marginTop',scrollTop*distance*0.5+'px')
	});

	$('.kyu .cd').css({
		transform : 'translateY('+
			(($('.kyu .cd').offset().top - scrollTop) - ($(window).height() - $('.kyu .cd').height())/2)*0.4+
			'px)'
	});

	$('.ichigo .cd').css({
		transform : 'translateY('+
			(($('.ichigo .cd').offset().top - scrollTop) - ($(window).height() - $('.ichigo .cd').height())/2)*0.4+
			'px)'
	});

	if( $(window).height() - ($('.accessories').offset().top - $(document).scrollTop()) > 200 ){
		$('.accessories').removeClass('prepare');
	}
});

$(function(){
	var starsCount = 40;
	var colors = [
		'rgb(247, 31, 31)',
		'rgb(250, 52, 195)',
		'rgb(255, 133, 0)'
	];
	for (var i = starsCount - 1; i >= 0; i--) {
		var thisStar = $('<div>').addClass('star').html('★');
		var distance = Math.random();
		var maxScrollTop = $(document).height() - $(window).height();
		var maxDelta = maxScrollTop*distance*0.5;
		var maxTop = $('body').height() - maxDelta;
		thisStar.data('distance', distance)
		.css({
			color : colors[ Math.floor(Math.random()*colors.length) ],
			top :  maxTop*Math.random(),
			left : ($('body').width() - 50)*Math.random(),
			opacity : Math.random()*0.4,
			transform : 'scale('+(0.5+distance*2)+')'
		})
		.appendTo($('.bg-stars'));
	};
});

if( !navigator.userAgent.match(/(iPod|iPhone|iPad)/) ){
	$(function(){
		$('.accessories').addClass('prepare');
	});
}