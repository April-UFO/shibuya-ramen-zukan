$(document).ready(function(){
      $(".slider").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		responsive: [{
		    breakpoint: 767,
			settings: {
			  slideToShow: 1
			}
		}]
	  });
	});