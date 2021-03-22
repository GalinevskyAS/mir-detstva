$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__burger, .header__row.row-2').toggleClass('active');
		$('body').toggleClass('lock');
	});

	// Инициализируем Swiper
	new Swiper('.image-slider', {

		// СТРЕЛКИ 
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		//БЕСКОНЕЧНОЕ ПРОКРУЧИВАНИЕ (отключи scrollbar, slidesPerColumn не больше 1)
		loop: true,

		//АВТОПРОКРУТКА
		autoplay: {
			// Пауза между прокруткой 
			delay: 3000,

			// Отключить после переключения вручную
			disableOnInteraction: false, //(false - после ручной смены автопрокрутка возобновится)
		},

		//ПЛАВНОСТЬ
		speed: 600,


		//ЭФФЕКТЫ ПЕРЕКЛЮЧЕНИЯ СЛАЙДОВ

		// Листание (по умолчанию)
		effect: 'slide',
	});

	new Swiper('.reviews-slider', {

		// Пагинация
		pagination: {
			el: '.swiper-pagination',
			// Буллиты (возможность клика)
			clickable: true,
			// Динамические буллиты (размер точек зависит от близости к крайнему слайду)
			dynamicBullets: true,
		},

		//БЕСКОНЕЧНОЕ ПРОКРУЧИВАНИЕ (отключи scrollbar, slidesPerColumn не больше 1)
		loop: true,

		// КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА НА СТРАНИЦУ
		slidesPerView: 1,

		//АВТОПРОКРУТКА
		autoplay: {
			// Пауза между прокруткой 
			delay: 10000,

			// Отключить после переключения вручную
			disableOnInteraction: false, //(false - после ручной смены автопрокрутка возобновится)
		},

		//ПЛАВНОСТЬ
		speed: 600,


		//ЭФФЕКТЫ ПЕРЕКЛЮЧЕНИЯ СЛАЙДОВ

		// Листание (по умолчанию)
		effect: 'slide',
	});

	// Переключение цвета ссылки меню при скролле на соответствующий блок 
	$(window).scroll(function () {
		let elementAbout = $('#about');
		let targetClassAbout = $('.about-link');
		let scrollTopPos = $(window).scrollTop();
		let elementAboutTopPos = elementAbout.offset().top - 100;
		let elementAboutBottomPos = elementAboutTopPos + elementAbout.height();

		if (scrollTopPos >= elementAboutTopPos && scrollTopPos <= elementAboutBottomPos + 69) {
			targetClassAbout.addClass('active');			
		} else {
			targetClassAbout.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementTeam = $('#team');
		let targetClassTeam = $('.team-link');
		let scrollTopPos = $(window).scrollTop();
		let elementTeamTopPos = elementTeam.offset().top - 100;
		let elementTeamBottomPos = elementTeamTopPos + elementTeam.height();

		if (scrollTopPos >= elementTeamTopPos && scrollTopPos <= elementTeamBottomPos + 61) {
			targetClassTeam.addClass('active');			
		} else {
			targetClassTeam.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementToys = $('#toys');
		let targetClassToys = $('.toys-link');
		let scrollTopPos = $(window).scrollTop();
		let elementToysTopPos = elementToys.offset().top - 109;
		let elementToysBottomPos = elementToysTopPos + elementToys.height();

		if (scrollTopPos >= elementToysTopPos && scrollTopPos <= elementToysBottomPos + 614) {
			targetClassToys.addClass('active');			
		} else {
			targetClassToys.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementHistory = $('#history');
		let targetClassHistory = $('.history-link');
		let scrollTopPos = $(window).scrollTop();
		let elementHistoryTopPos = elementHistory.offset().top - 101;
		let elementHistoryBottomPos = elementHistoryTopPos + elementHistory.height();

		if (scrollTopPos >= elementHistoryTopPos && scrollTopPos <= elementHistoryBottomPos + 70) {
			targetClassHistory.addClass('active');			
		} else {
			targetClassHistory.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementContacts = $('#contacts');
		let targetClassContacts = $('.contacts-link');
		let scrollTopPos = $(window).scrollTop();
		let elementContactsTopPos = elementContacts.offset().top - 101;
		let elementContactsBottomPos = elementContactsTopPos + elementContacts.height();

		if (scrollTopPos >= elementContactsTopPos && scrollTopPos <= elementContactsBottomPos + 69) {
			targetClassContacts.addClass('active');			
		} else {
			targetClassContacts.removeClass('active');	
		}

	});

	$('.close-popup').click(function() {
        $('.popup-1').removeClass('open');
		$('.popup-2').removeClass('open');
		$('body').removeClass('lock');
		$('body').removeClass('scroll-lock');
		$('.header').removeClass('scroll-lock');
		$('.popup-2').removeClass('scroll-lock');
	});

	$('.popup-1__button.button p').click(function() {
		$('.popup-1').removeClass('open');
		$('.popup-2').addClass('open');
		$('body').addClass('lock');
		$('body').addClass('scroll-lock');
		$('.header').addClass('scroll-lock');
		$('.popup-2').addClass('scroll-lock');
	});

	// Открываем первый попап через 20 секунд один раз
	var openFirstPopup;
	openFirstPopup = setTimeout(function () {		
		$('.popup-1').addClass('open');
	}, 19 * 1000);

	// Вытаскивем блоки из родителя (для адаптива)
	if ($(window).width() < 768) { 
		$('div').unwrap('.about__content');
		$('.about__content').remove(); // Убираю обёртку
		$('div').unwrap('.history__text-block.text-block');
		$('.history__text-block.text-block').remove(); // Убираю обёртку		
	}

	// Делаем кликабельным описание товара на мобильном
	$('.item__menu').click(function(){
		if ($(window).width() < 768) {
			$(this).toggleClass('active');
			$('.item__menu').not($(this)).removeClass('active');
		}
	});

	// Плавный скролл к блокам-якорям
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");	

		$('html, body').animate({scrollTop: $(_href).offset().top - 100});
		if ($(window).width() < 768) {
			$('html, body').animate({scrollTop: $(_href).offset().top - 80});
		}
		$('.header__burger, .header__row.row-2').removeClass('active');   
		$('body').removeClass('lock'); 

		return false;
	});	

});