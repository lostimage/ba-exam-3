//=require jquery.min.js

//=require what-input.min.js

// Core Foundation files
//=require foundation.core.min.js

//=require foundation.util.keyboard.min.js
//=require foundation.util.mediaQuery.js
//=require foundation.util.triggers.min.js

//=require foundation.offcanvas.min.js 

// require foundation.util.*.min.js

// require foundation.dropdown.min.js
// require foundation.responsiveMenu.min.js
// require foundation.responsiveToggle.min.js
// require foundation.toggler.min.js

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.min.js
// require foundation.accordion.min.js
// require foundation.accordionMenu.min.js
// require foundation.drilldown.min.js
// require foundation.dropdownMenu.min.js
// require foundation.equalizer.min.js
// require foundation.interchange.min.js
// require foundation.magellan.min.js
// require foundation.orbit.min.js
// require foundation.reveal.min.js
// require foundation.slider.min.js
// require foundation.sticky.min.js
// require foundation.tabs.min.js
// require foundation.tooltip.min.js
// require foundation.zf.responsiveAccordionTabs.min.js

//=require slick.min.js


;(function($){
	$(document).foundation();

	$(document).ready(function(){
		var $slider = $('.ba-works-slider');

		$slider.slick({
			dots: true,
			appendDots:'.ba-works',
			prevArrow:'.ba-works-prev-arrow',
			nextArrow:'.ba-works-next-arrow',
			infinite:true
		});
		var $slider = $('.ba-team-slider');

		$slider.slick({
			dots: false,
			prevArrow:'.ba-prev-arrow',
			nextArrow:'.ba-next-arrow',
			infinite: true,
			slidesToShow : 3,
			slidesToScroll:1,
			responsive: [
				{
				  breakpoint: 960,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
			
			]
		});
	});
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:40.650002,lng: -73.949997},
		zoom: 13,
	});
	var marker = new google.maps.Marker({
			position: {lat:40.650002,lng: -73.949997},
			map: map,
			icon:'assets/img/pin.svg'

		  });
	 
	}
	window.addEventListener('load', initMap);
	/// slow link scroll

	$(".ba-header").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".ba-button-up").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
})(jQuery);

















