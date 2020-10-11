$(function(){

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.header__menu').slideToggle()
	});

	$(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
