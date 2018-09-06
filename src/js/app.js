jQuery(document).ready(function( $ ) {

	// Remove the "preload" class after page load (disables transitions for page load)
	$("body").removeClass("preload");

	/****** NAVIGATION ANIMATIONS ******/

	// Navigate to portfolio
	$('#portfolio-nav').on('click', function() {

		// shift up
		$('#index').css({"transform":"translateY(100vh)"});
		$('#portfolio').css({"transform":"translateY(0vh)"});
	});

	// Navigate to resume
	$('#resume-nav').on('click', function() {

		// shift right
		$('#index').css({"transform":"translateX(-100vw)"});
		$('#resume').css({"transform":"translateX(0vw)"});

	});

	// Navigate to blog
	$('#blog-nav').on('click', function() {

		// shift down
		$('#index').css({"transform":"translateY(-100vh)"});
		$('#blog').css({"transform":"translateY(0vh)"});
	});

	// Return to splash page
	$('.return').on('click', function() {
		$('#index').css({"transform":"translateY(0vh)"});

		// reset every page
		$('#portfolio').css({"transform":"translateY(-100vh)"});
		$('#resume').css({"transform":"translateX(100vw)"});
		$('#blog').css({"transform":"translateY(100vh)"});
	});

	/****** ADDITIONAL NAVIGATION ******/

	// Scroll on resume
	var scrollCount = 0;

	$('#resume-png').bind('mousewheel DOMMouseScroll', function(event){

	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	    	// scroll up
	    	if (scrollCount == 0) return;	// don't go lower than starting position
	    	scrollCount+=10;
	    	$('#resume-png').css({"transform":"translateY(" + scrollCount + "vh)"});
	    } else {
	    	// scroll down
	    	if (scrollCount == -40) return;	// don't go higher than starting position -40vh 
	    	scrollCount-=10;
	    	$('#resume-png').css({"transform":"translateY(" + scrollCount + "vh)"});
	    }

	    console.log(scrollCount);
	});

	/****** PORFOLIO ******/

	// A moving gallery for the portfolio <li>s
	$('#portfolio-imgs').slick({
		nextArrow: $('#arrow-poly-right'),
		prevArrow: $('#arrow-poly-left'),
	});

	// During window resize, remove transitions (TODO: reset css after event)
	/*function removeTransition() {
		$('ul').children().css({"transition":"0s"});
		$(window).off('resize', removeTransition);
	}

	$(window).on('resize', function() {
		$('ul').children().css({"transition":"0s"});
		$('ul').children().off();
	});*/
});