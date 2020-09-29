$(function(){

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.header__menu').slideToggle()
	});

});
