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

    $('.header__city').on('click', function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.city').slideDown(250);
        } else {
            $('.city').slideUp(250);
        }

        $('.search').addClass('invisible');
    });

    isHeaderHover = false;

    $('.header').on('mouseenter', function () {
        isHeaderHover = true;
    });

    $('.header').on('mouseleave', function () {
        isHeaderHover = false;
    });

    $('.city').on('mouseleave', function () {
        setTimeout(() => {
            if (!isHeaderHover) {
                $('.city').slideUp(250);
                $('.header__city').removeClass('active');
            }
        }, 10);
    });

    $('.city__main-cities>ul>li>a').on('click', function () {
        $('.city__main-cities>ul>li>a').removeClass('active');
        $('.city__all-cities__content>ul>li>a').removeClass('active');
        $(this).addClass('active');

        $('.header__city>p').text($(this).text());
        $('.burger__city>p').text($(this).text());
    });

    $('.city__all-cities__content>ul>li>a').on('click', function () {
        $('.city__main-cities>ul>li>a').removeClass('active');
        $('.city__all-cities__content>ul>li>a').removeClass('active');
        $(this).addClass('active');

        $('.header__city>p').text($(this).text());
        $('.burger__city>p').text($(this).text());
    });

    let isDeopDownBtnHover = false;
    let isDropDownMenuHover = false;

    $('.drop-down-menu__btn').on('mouseenter', function () {
        isDeopDownBtnHover = true;
        $('.drop-down-menu').slideDown(250);
        $('.search').addClass('invisible');
        $('.header__city').removeClass('active');
        $('.city').slideUp(250);
    });

    $('.drop-down-menu__btn').on('mouseleave', function () {
        isDeopDownBtnHover = false;
        setTimeout(() => {
            if (!isDropDownMenuHover) {
                $('.drop-down-menu').slideUp(250);
            }
        }, 10);
    });

    $('.drop-down-menu').on('mouseenter', function () {
        isDropDownMenuHover = true;
    });

    $('.drop-down-menu').on('mouseleave', function () {
        isDropDownMenuHover = false;
        setTimeout(() => {
            if (!isDeopDownBtnHover) {
                $('.drop-down-menu').slideUp(250);
            }
        }, 10);
    });

    $('.drop-down-menu__catalog>ul>li>a').on('mouseenter', function () {
        $('.drop-down-menu__catalog>ul>li>a').removeClass('active');
        $(this).addClass('active');

        let catalogId = $(this).data('id');

        $('.drop-down-menu__category>ul').each(function () {
            if ($(this).data('id') === catalogId) {
                $('.drop-down-menu__category>ul').removeClass('active');
                $(this).addClass('active');
            }
        });

        let categoryId = $('.drop-down-menu__category>ul.active>li>a.active').data('id');

        $('.drop-down-menu__item').each(function () {
            let finalId = catalogId + '-' + categoryId;
            if ($(this).data('id') === finalId) {
                $('.drop-down-menu__item').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    $('.drop-down-menu__category>ul>li>a').on('mouseenter', function () {
        $('.drop-down-menu__category>ul.active>li>a').removeClass('active');
        $(this).addClass('active');

        let catalogId = $('.drop-down-menu__catalog>ul>li>a.active').data('id');
        let categoryId = $(this).data('id');

        $('.drop-down-menu__item').each(function () {
            let finalId = catalogId + '-' + categoryId;
            if ($(this).data('id') === finalId) {
                $('.drop-down-menu__item').removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    $('.burger__close').on('click', function () {
        $('.burger').removeClass('burger-opened');
        $('body').removeClass('noscroll');
        window.scroll(0, scrollTop);
    });

    $('.burger__menu>ul>li.more').on('click', function () {
        $('.burger__menu').addClass('invisible');
        $('.burger__city').addClass('invisible');
        $('.burger__city-select').addClass('invisible');
        $('.burger__menu-more').removeClass('invisible');
    });

    $('.burger__menu-more__back').on('click', function () {
        $('.burger__menu').removeClass('invisible');
        $('.burger__city').removeClass('invisible');
        $('.burger__city-select').addClass('invisible');
        $('.burger__menu-more').addClass('invisible');
    });

    $('.burger__city').on('click', function () {
        $('.burger__city-select').removeClass('invisible');
        $('.burger__city').addClass('invisible');
        $('.burger__menu').addClass('invisible');
        $('.burger__menu-more').addClass('invisible');
    });

    $('.burger__city-select__main-cities>li>a').on('click', function () {
        $('.burger__city-select__main-cities>li>a').removeClass('active');
        $('.burger__city-select__all-cities>ul>li>a').removeClass('active');
        $(this).addClass('active');

        $('.burger__menu').removeClass('invisible');
        $('.burger__city').removeClass('invisible');
        $('.burger__city-select').addClass('invisible');
        $('.burger__menu-more').addClass('invisible');

        $('.header__city>p').text($(this).text());
        $('.burger__city>p').text($(this).text());
    });

    $('.burger__city-select__all-cities>ul>li>a').on('click', function () {
        $('.burger__city-select__main-cities>li>a').removeClass('active');
        $('.burger__city-select__all-cities>ul>li>a').removeClass('active');
        $(this).addClass('active');

        $('.burger__menu').removeClass('invisible');
        $('.burger__city').removeClass('invisible');
        $('.burger__city-select').addClass('invisible');
        $('.burger__menu-more').addClass('invisible');

        $('.header__city>p').text($(this).text());
        $('.burger__city>p').text($(this).text());
    });

    $('.search-open').on('click', function () {
        $('.search').toggleClass('invisible');
        $('.header__city').removeClass('active');
        $('.city').slideUp(250);
    });

    $('.search__close').on('click', function () {
        $('.search').addClass('invisible');
    });

    if ($('.slider').length) {
        const mainSlider = new Swiper('.slider>.swiper', {
            effect: 'fade',
            speed: 500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                type: 'progressbar',
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
    }

    if ($('.products').length) {
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
    }

    if ($('.list').length) {
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
    }

    if ($('.partners').length) {
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
    }

    if ($('.viewed-products').length) {
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
    }

    if ($('.about').length) {
        $('.about__collapse-btn_open').on('click', function () {
            $('.about__collapse').slideDown(500);
            $(this).addClass('invisible');
        });
    }

    if ($('.category').length) {
        $($('.category__filter__catalog__accordion>ul>li>a.active').closest('.category__filter__catalog__accordion').addClass('active')[0].children[1]).slideDown(0);

        $('.category__filter__catalog__accordion>div').on('click', function () {
            let accordion = $(this.parentNode);
    
            if (accordion.hasClass('active')) {
                accordion.removeClass('active');
                $(accordion[0].children[1]).slideUp(250);
            } else {
                $('.category__filter__catalog__accordion').removeClass('active');
                accordion.addClass('active');
                $('.category__filter__catalog__accordion>ul').slideUp(250);
                $(accordion[0].children[1]).slideDown(250);
            }
        });
    
        $('.category__filter__accordion__title').on('click', function () {
            let accordion = $(this.parentNode);
    
            if (accordion.hasClass('active')) {
                accordion.removeClass('active');
                $(accordion[0].children[1]).slideUp(250);
            } else {
                accordion.addClass('active');
                $(accordion[0].children[1]).slideDown(250);
            }
        });
    
        $('.category__sort__by>a').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).toggleClass('reversed');
            } else {
                $('.category__sort__by>a').removeClass('active reversed');
                $(this).addClass('active');
            }
        });
    
        $('.category__filter__open').on('click', function () {
            const form = $('.category__filter__form');
            const body = $('body');
    
            form.addClass('active');
    
            if (form.hasClass('active')) {
                body.addClass('noscroll');
                body.css('top', `-${scrollTop}px`);
            } else {
                body.removeClass('noscroll');
                window.scroll(0, scrollTop);
            }
        });
    
        $('.category__filter__form__header>button').on('click', function () {
            const form = $('.category__filter__form');
            const body = $('body');
    
            form.removeClass('active');
    
            if (form.hasClass('active')) {
                body.addClass('noscroll');
                body.css('top', `-${scrollTop}px`);
            } else {
                body.removeClass('noscroll');
                window.scroll(0, scrollTop);
            }
        });
    }

    if ($('.product').length) {
        const productThumbs = new Swiper('.product__thumbs', {
            slidesPerView: 4,
            spaceBetween: 12,
            direction: 'vertical'
        });
        
        const productSlider = new Swiper('.product__slider', {
            speed: 500,
            effect: 'fade',
            navigation: {
                prevEl: '.product__slider__prev',
                nextEl: '.product__slider__next'
            },
            pagination: {
                el: '.product__slider__pagination'
            }, 
            thumbs: {
                swiper: productThumbs
            }
        });

        $('.product__btn').on('click', function () {
            if ($(this).hasClass('product__btn_in-basket')) {
                $($(this).children()[0]).text('в корзину');
                $(this).removeClass('product__btn_in-basket');
            } else {
                $($(this).children()[0]).text('в корзине');
                $(this).addClass('product__btn_in-basket');
            }
        });

        $('.product__tabs__item').on('click', function () {
            $('.product__tabs__item').removeClass('active');
            $(this).addClass('active');

            let id = $(this).data('id');

            $('.product__info__item').each(function () {
                if ($(this).data('id') === id) {
                    $('.product__info__item').removeClass('active');
                    $(this).addClass('active');
                }
            });
        });

        $('.product__info_mob__tab').on('click', function () {
            if ($(this).closest('.product__info_mob__item').hasClass('active')) {
                $(this).closest('.product__info_mob__item').removeClass('active');
                $(this.nextElementSibling).slideUp(250);
            } else {
                $('.product__info_mob__item').removeClass('active');
                $(this).closest('.product__info_mob__item').addClass('active');
                $('.product__info_mob__item__content').slideUp(250);
                $(this.nextElementSibling).slideDown(250);
            }
        });
    }
});