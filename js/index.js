$(document).ready(function () {
    Fancybox.bind('[data-fancybox]');

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 500, 'swing');
    });

    let scrollTop = 0;
    window.addEventListener('scroll', function () {
        if (!$('body').hasClass('noscroll')) {
            scrollTop = window.scrollY;
        }
    });

    $('.header__burger-btn').on('click', function () {
        const burger = $('.burger');
        const body = $('body');
        
        burger.toggleClass('burger-opened');

        if (burger.hasClass('burger-opened')) {
            body.addClass('noscroll');
            body.css('top', `-${scrollTop}px`);
        } else {
            body.removeClass('noscroll');
            window.scroll(0, scrollTop);
        }
    });

    $('.burger__close').on('click', function () {
        $('.burger').removeClass('burger-opened');
        $('body').removeClass('noscroll');
        window.scroll(0, scrollTop);
    });

    const mainSlider = new Swiper('.slider>.swiper', {
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        scrollbar: {
            el: '.slider .slider__scrollbar__element'
        },
        navigation: {
            prevEl: '.slider .slider__navigation__prev',
            nextEl: '.slider .slider__navigation__next'
        },
        on: {
            init: function () {
                $('.slider__scrollbar__current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}` : this.activeIndex+1);
                $('.slider__scrollbar__all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
            }
        }
    });
    
    mainSlider.on('slideChange', function () {
        $('.slider__scrollbar__current').text(this.activeIndex+1 < 10 ? `0${this.activeIndex+1}` : this.activeIndex+1);
        $('.slider__scrollbar__all').text(this.slides.length < 10 ? `0${this.slides.length}`: this.slides.length);
    });

    $('.products__filter__item').on('click', function () {
        $('.products__filter__item').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
    });

    let sliderCount = 0;
    $('.products__item__slider').each(function () {
        sliderCount++;
        const productsSlider = new Swiper(`#products-item-${sliderCount}>.products__item__slider>.swiper`, {
            speed: 500,
            effect: 'fade',
            scrollbar: {
                el: `#products-item-${sliderCount}>.products__item__slider>.products__item__scrollbar`
            },
        });

        for (let i = 0; i < productsSlider.slides.length; i++) {
            $(`#products-item-${sliderCount}-slice-${i+1}`).on('mouseenter', function () {
                productsSlider.slideTo($(this).data('index'));
            });
        }
    });

    $('.products__item__btn').on('click', function () {
        $(this).toggleClass('products__item__btn_in-basket');

        if ($(this).hasClass('products__item__btn_in-basket')) {
            $($(this).children()[1]).text('в корзине');
        } else {
            $($(this).children()[1]).text('в корзину');
        }
    });

    function productsSectionMore() {
        if (this.outerWidth <= 992) {
            $('.products__filter>.section-more').appendTo('.products .section-header');
        } else {
            $('.products .section-header>.section-more').appendTo('.products__filter');
        }
    }

    productsSectionMore();

    $(window).on('resize', function () {
        productsSectionMore();
    });

    const listSlider = new Swiper('.list .swiper', {
        speed: 500,
        spaceBetween: 20,
        slidesPerView: 1.3,
        breakpoints: {
            993: {
                spaceBetween: 30,
                slidesPerView: 4
            },

            769: {
                slidesPerView: 2
            }
        }
    });

    const partnersSlider = new Swiper('.partners .swiper', {
        speed: 500,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        navigation: {
            prevEl: '.partners__prev',
            nextEl: '.partners__next'
        },
        breakpoints: {
            993: {
                slidesPerView: 4
            },
            769: {
                slidesPerView: 2
            }
        }
    });

    const viewedProductsSlider = new Swiper('.viewed-products__slider>.swiper', {
        speed: 500,
        spaceBetween: 20,
        slidesPerView: 1.3,
        breakpoints: {
            993: {
                spaceBetween: 30,
                slidesPerView: 4
            },

            769: {
                slidesPerView: 2
            }
        }
    });
});