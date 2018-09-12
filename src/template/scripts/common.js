$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.reviews__list').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}}, {
			breakpoint: 620,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}]
	});

	$('.steps__item').hover(function() {
		if (!$(this).hasClass('steps__item_active')) {
			$('.steps__item').removeClass('steps__item_active');
			$(this).addClass('steps__item_active');
		}
	});


	// $('.popup__images').each(function(index, el) {
		
	// });

	$('.catalog__btn').click(function(event) {
		var catalogItem = $(this).parents('.catalog__item'),
				popupImage = catalogItem.find('.popup__images-img'),
				popupImages = catalogItem.find('.popup__images-imgs');

		popupImage.slick({
			asNavFor: popupImages,
			arrows: false
		});

		popupImages.slick({
			asNavFor: popupImage,
			arrows: false,
			focusOnSelect: true,
			slidesToShow: 3
		});
	});

	$("a[href^='#']").click(function(){
	    var _href = $(this).attr("href");
	    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
	    return false;
	});
	
	var humburger = $('.hum'),
			navigation = $('.panel__nav');

	humburger.click(function(event) {
		$(this).toggleClass('hum_toggle');
		navigation.toggleClass('panel__nav_toggle');
	});


	$('.panel__nav a').click(function(event) {
		humburger.removeClass('hum_toggle');
		navigation.removeClass('panel__nav_toggle');
	});
});
