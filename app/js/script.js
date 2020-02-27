/* slider generate */
let slider_wrp = document.querySelector('.features__slider-container');
slider_wrp.classList.add('swiper-wrapper');
for (let i = 0; i < slider.length; i++) {
	let slide_code = '<div class="features__slide slide"><div class="slide__num">'+(i+1)+'</div><div class="slide__text-container"><div class="slide__new-label" show="'+slider[i].new+'">NEW</div><h2 class="slide__title">'+slider[i].title+'</h2><p class="slide__text">'+slider[i].text+'</p><a href="#" class="slide__button">Learn More</a></div>';
	let slide_wrp = document.createElement('div');
	slide_wrp.classList.add('features__slide-container');
	slide_wrp.classList.add('swiper-slide');
	slide_wrp.innerHTML = slide_code;
	slider_wrp.appendChild(slide_wrp);
}

/* the same height of the slides */
let slide_text = document.getElementsByClassName("slide__text");
let maxHeight = 0;
for (let i = 0; i < slide_text.length; i++) {
	if (maxHeight < slide_text[i].clientHeight) {
    	maxHeight = slide_text[i].clientHeight; 
    }
}
for (let i = 0; i < slide_text.length; i++) {
	slide_text[i].style.height = maxHeight + "px";
}

/* slider init */
/* IE не понимает Breakpoints в SwipperJS */
let width=document.body.clientWidth;
if(width >= 1280){
	let mySwiper = new Swiper ('.features__slider', {
	    loop: true,
	    slidesPerView: 2,
	    slidesPerGroup: 2,
	    pagination: {
	      el: '.features__slider-pagination',
	    }
	});
} else {
	let mySwiper = new Swiper ('.features__slider', {
	    loop: true,
	    slidesPerView: 1,
	    slidesPerGroup: 1,
	    pagination: {
	      el: '.features__slider-pagination',
	    }
	});
}

/* Header-Fix*/
let header = document.querySelector('.page__header');
let header_height = header.clientHeight;
window.onscroll = function() {
    if (window.pageYOffset > header_height) {
        header.classList.add('page__header--fixed');
    }
    else if (window.pageYOffset < header_height) {
        header.classList.remove('page__header--fixed');
    }
};

/* Menu */
let hamburger = {
	navToggle: document.querySelector('.header__hamburger'),
	nav: document.querySelector('.header__nav '),
	doToggle: function(e) {
		e.preventDefault();
		this.navToggle.classList.toggle('header__menu--open');
		this.nav.classList.toggle('header__menu--open');
	}
};
hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

let submenu = {
	navToggle: document.querySelector('.nav__item-container--attach'),
	nav: document.querySelector('.nav__items-wrp--inner '),
	doToggle: function(e) {
		e.preventDefault();
		this.navToggle.classList.toggle('header__submenu--open');
		this.nav.classList.toggle('header__submenu--open');
	}
};
submenu.navToggle.addEventListener('click', function(e) { submenu.doToggle(e); });