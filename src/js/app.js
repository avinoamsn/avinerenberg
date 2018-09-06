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

	// TODO: remove scroll bar, add scrolling function to resume page
	// Scroll on resume
	/*$('#resume-nav').on('click', function() {

		// shift right
		$('#index').css({"transform":"translateX(-100vw)"});
		$('#resume').css({"transform":"translateX(0vw)"});

	});*/

	/****** PORFOLIO ******/

	// A moving gallery for the portfolio <li>s
	var logoCount = 1; // begins at 1 because jquery's ":nth-" child selectors are derived from the CSS spec (1-indexed)
	var numLogos = $("ul#portfolio-imgs").children().length; // the number of logos (<li>s) in the list

	$('#portfolio-imgs').slick({
		nextArrow: $('#arrow-poly-right'),
		prevArrow: $('#arrow-poly-left'),
		
	});

	/*
	$('ul#portfolio-imgs li:nth-child(1)').css({"visibility":"visible","display":"block"}); // display the first logo

	// if right arrow clicked, "rotate" logos from right
	$('#arrow-poly-right').on('click', function() {
		$('ul#portfolio-imgs li:nth-child(' + logoCount + ')').css({"transform":"translateX(100vw)",
																	"visibility":"hidden",
																	"display":"none"});		// hide current logo
		logoCount++; 																		// increment logoCount
		if (logoCount > numLogos) logoCount = 1; 											// if logoCount > numLogos, reset to 1
		$('ul#portfolio-imgs li:nth-child(' + logoCount + ')').css({"transform":"translateX(0vw)",
																	"visibility":"visible",
																	"display":"block"});	// display new logo
	});

	// if right arrow clicked, "rotate" logo from left
	$('#arrow-poly-left').on('click', function() {
		$('ul#portfolio-imgs li:nth-child(' + logoCount + ')').css({"display":"none"}); 	// hide current logo
		logoCount--;																		// decrement logoCount
		if (logoCount < 1) logoCount = numLogos; 											// if logoCount < 1, set to numLogos
		$('ul#portfolio-imgs li:nth-child(' + logoCount + ')').css({"visibility":"visible","display":"block"}); 	// display new logod
	});
	*/

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