/* ==============================================
    Website Preloader
 =============================================== */

$(window).on("load",function() {
    'use strict';
    // Animate loader off screen
    $(".se-pre-con").fadeOut( "slow" );

});


/* ==============================================
    Navigation Fixed on Scroll
 =============================================== */

$(window).scroll(function(){
    'use strict';
    var sticky = $('#goToTop'),
        scroll = $(window).scrollTop();
    if (scroll >= 20)
    {
        $('nav').addClass('nav-fixed');
    }
    else {
        $('nav').removeClass('nav-fixed');
    }
});

/* ==============================================
 Navigation Click & Active on Reaching Section
 =============================================== */
'use strict';
var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    'use strict';
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height - 90,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

var navlia = $('.nav li a');
$(navlia).on('click',function() {
    'use strict';
    var hreff = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(hreff).offset().top-60
    }, 800);

    if($(window).width() <= 1200){
        'use strict';
        $('.navbar-toggle').trigger('click');
    }
});

$('nav .logoo a').on('click',function() {
    'use strict';
    $(navlia).removeClass('active');
    $('.nav li:first-child a').addClass('active');
});

/* ==============================================
    Headear Phone Slider
 =============================================== */
'use strict';
$("#owl-trans-iphone").owlCarousel({
    loop:true,
    margin:5,
    autoplay: true,
    autoplayTimeout: 2500,
    animateOut: 'fadeOut',
    nav:false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


/* ==============================================
    Screenshot / Mobile Screens Slider
 =============================================== */
'use strict';
$("#owl-mobile-screens").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 600,
    nav: true,
    dots: false,
    margin: 50,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


/* ==============================================
     Half Screen Video Slider
 =============================================== */
'use strict';
$("#half-owl-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: false,
    dots: false,
    margin: 50,
    center:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        767: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/*Click-Next-Prev-Working*/
    'use strict';
    var previous = $('.mobile-overlay .owl-prev');
    var next = $('.mobile-overlay .owl-next');
    var trigprev = $('.mobile-screens .owl-prev');
    var trignext = $('.mobile-screens .owl-next');
    $(previous).on('click', function(){
        'use strict';
        $(trigprev).trigger('click');
    });
    $(next).on('click', function(){
        'use strict';
        $(trignext).trigger('click');
    });


/* ==============================================
    Testimonials Slider
 =============================================== */
'use strict';
$("#owl-testimonials").owlCarousel({
    loop:false,
    autoplay: true,
    autoplayTimeout: 4000,
    nav:false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/* ==============================================
     Youtube Video Popups Function Calling
 =============================================== */
'use strict';
jQuery("a.videoPopup").YouTubePopUp();

