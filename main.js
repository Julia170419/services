let burger = document.querySelector('.burger');
let burgerOpen = document.querySelector('#burger--open');

let header = document.querySelector('.header');
let headerTop = document.querySelector('.header-top');

let burgerLine = headerTop.querySelector('.header-top__burger-line');
let headerTopLine = headerTop.querySelector('.header-top__line');

let headerTopCall = headerTop.querySelector('.header-top__call');
let headerTopMessage = headerTop.querySelector('.header-top__message');
let headerTopPerson = headerTop.querySelector('.header-top__person');
let headerTopSettingsBtn = headerTop.querySelector('.header-top__settings-btn');
let headerTopSearchBtn = headerTop.querySelector('.header-top__search-btn');
let headerTopSearch = headerTop.querySelector('.header-top__search');

let headerMain = document.querySelector('.header-main');
let container = document.querySelector('.container');

let heading = document.querySelector('.heading');

let mainMenu = document.querySelector('#main-menu');
let burgerMenu = document.querySelector('#burger-menu');

let menuFooter = document.querySelector('#menu-footer');

let info = document.querySelector('.info');

let main = document.querySelector('.main');

burger.addEventListener('click', function (evt) {
    evt.preventDefault();
    burger.classList.add('burger--none');
    burgerOpen.classList.add('burger--open');
    burgerOpen.classList.remove('burger--none');

    header.classList.add('header--open');
    headerTop.classList.add('header-top--open');

    if (window.innerWidth >= 769) {
        burgerLine.classList.add('header-top--open__burger-line');
    };
    
    headerTopLine.classList.add('header-top--open__line');

    headerTopCall.classList.add('header-top--open__call');
    headerTopMessage.classList.add('header-top--open__message');
    headerTopPerson.classList.add('header-top--open__person');
    headerTopSettingsBtn.classList.add('header-top--open__settings-btn');
    headerTopSearchBtn.classList.add('header-top--open__search-btn');
    headerTopSearch.classList.add('header-top--open__search');

    headerMain.classList.add('header-main--open');
    container.classList.add('container--open');
    
    heading.classList.add('heading--none');

    mainMenu.classList.add('menu--none');
    burgerMenu.classList.add('menu--open');
    
    menuFooter.classList.add('menu-footer');

    info.classList.add('info--none');

    main.classList.add('info--none');
});

burgerOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    burger.classList.remove('burger--none');
    burgerOpen.classList.remove('burger--open');
    burgerOpen.classList.add('burger--none');

    header.classList.remove('header--open');
    headerTop.classList.remove('header-top--open');

    if (window.innerWidth >= 769) {
        burgerLine.classList.remove('header-top--open__burger-line');
    };

    headerTopLine.classList.remove('header-top--open__line');
    
    headerTopCall.classList.remove('header-top--open__call');
    headerTopMessage.classList.remove('header-top--open__message');
    headerTopPerson.classList.remove('header-top--open__person');
    headerTopSettingsBtn.classList.remove('header-top--open__settings-btn');
    headerTopSearchBtn.classList.remove('header-top--open__search-btn');
    headerTopSearch.classList.remove('header-top--open__search');

    headerMain.classList.remove('header-main--open');
    container.classList.remove('container--open');

    heading.classList.remove('heading--none');

    mainMenu.classList.remove('menu--none');
    burgerMenu.classList.remove('menu--open');
    burgerMenu.classList.add('menu--none');

    menuFooter.classList.remove('menu-footer');
    menuFooter.classList.add('menu--none');

    info.classList.remove('info--none');

    main.classList.remove('info--none');
});


const mediaQuery1120 = window.matchMedia('(min-width: 1120px)');
let logo = document.querySelector('.logo');
let headerTopSearchText = document.querySelector('.header-top__search-text');
let headerTopSettings = document.querySelector('.header-top__settings');

function updateDesktopClasses() {
    const isDesktop = mediaQuery1120.matches;
    const isMenuOpen = burgerOpen.classList.contains('burger--open');
    
    if (isDesktop) {
        if (isMenuOpen) {
            logo.classList.add('header--open__logo');
            headerTopSearchText.classList.add('header-top--open__search-text');
            headerTopSettings.classList.add('header-top__settings--none');
        } else {
            logo.classList.remove('header--open__logo');
            headerTopSearchText.classList.remove('header-top--open__search-text');
            headerTopSettings.classList.remove('header-top__settings--none');
        }
    }
}

updateDesktopClasses();
mediaQuery1120.addEventListener('change', updateDesktopClasses);

//active-links
const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        menuLinks.forEach(item => {
            item.classList.remove('menu__link--active');
        });
        
        this.classList.add('menu__link--active');
    });
});

// swiper
const slider = document.querySelector('.swiper');
let swiperInstance;

function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
        
        swiperInstance = new Swiper(".swiper", {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: true,
            loopAdditionalSlides: 5,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false,
            },
            speed: 6000,
            freeMode: false,
            allowTouchMove: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
            },
        });

        slider.dataset.mobile = 'true';
    }
    
    if (window.innerWidth > 768) {
        slider.dataset.mobile = 'false';
        
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

mobileSlider();
window.addEventListener('resize', () => mobileSlider());

let swiperSlide7 = document.querySelector('.swiper-slide:nth-child(7)');
let swiperSlide8 = document.querySelector('.swiper-slide:nth-child(8)');
let swiperSlide9 = document.querySelector('.swiper-slide:nth-child(9)');
let swiperSlide10 = document.querySelector('.swiper-slide:nth-child(10)');
let swiperSlide11 = document.querySelector('.swiper-slide:nth-child(11)');

if (window.innerWidth > 768) {
    swiperSlide7.classList.add('swiper-slide--none');
    swiperSlide8.classList.add('swiper-slide--none');
    swiperSlide9.classList.add('swiper-slide--none');
    swiperSlide10.classList.add('swiper-slide--none');
    swiperSlide11.classList.add('swiper-slide--none');
};

if (window.innerWidth >= 1120) {
    swiperSlide7.classList.remove('swiper-slide--none');
    swiperSlide8.classList.remove('swiper-slide--none');
};

let swiperButton = document.querySelector('.all-btn');
let infoArrows = swiperButton.querySelector('.info__arrows');
let btnText = swiperButton.querySelector('.text-all');
let swiperWrapper = document.querySelector('.swiper-wrapper');

swiperButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (infoArrows.classList.contains('info__arrows--open')) {
        swiperButton.classList.remove('all-btn--open');

        infoArrows.classList.remove('info__arrows--open');

    btnText.textContent = 'Показать все';

    slider.classList.remove('swiper--open');
    swiperWrapper.classList.remove('swiper-wrapper--open');

    if (window.innerWidth > 768 && window.innerWidth < 1120) {
        swiperSlide7.classList.remove('swiper-slide--none');
        swiperSlide8.classList.remove('swiper-slide--none');
        swiperSlide9.classList.add('swiper-slide--none');
        swiperSlide10.classList.add('swiper-slide--none');
        swiperSlide11.classList.add('swiper-slide--none');
    } else {
        swiperSlide9.classList.add('swiper-slide--none');
        swiperSlide10.classList.add('swiper-slide--none');
        swiperSlide11.classList.add('swiper-slide--none');
    };
    } else {
    swiperButton.classList.add('all-btn--open');

    infoArrows.classList.add('info__arrows--open');

    btnText.textContent = 'Скрыть';

    slider.classList.add('swiper--open');
    swiperWrapper.classList.add('swiper-wrapper--open');

    if (window.innerWidth > 768 && window.innerWidth < 1120) {
        swiperSlide9.classList.remove('swiper-slide--none');
        swiperSlide10.classList.remove('swiper-slide--none');
        swiperSlide11.classList.remove('swiper-slide--none');
    } else {
        swiperSlide9.classList.remove('swiper-slide--none');
        swiperSlide10.classList.remove('swiper-slide--none');
        swiperSlide11.classList.remove('swiper-slide--none');
    }
    };
});
