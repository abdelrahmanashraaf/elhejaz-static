/* =================================
------------------------------------
	Elhejaz
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';

var window_w = $(window).innerWidth();


$(window).on('load', function() {
    /*------------------
    	Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

    __portfolio(); // call portfolio function

});


(function($) {

    /*------------------
    	Navigation
    --------------------*/
    $('.nav-switch').on('click', function(event) {
        $('.nav-menu').slideToggle(400);
        event.preventDefault();
    });



    /*------------------
    	Background set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });


    /*------------------
    	Hero Slider
    --------------------*/
    var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeInLeft',
        navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        //autoplay: true,
        mouseDrag: false,
        onInitialized: function() {
            var a = this.items().length;
            if (a < 10) {
                $("#snh-1").html("<span>01" + " / </span>0" + a);
            } else {
                $("#snh-1").html("<span>01" + " / </span>" + a);
            }
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index,
            a = a.item.count;
        if (a < 10) {
            $("#snh-1").html("<span>0" + (1 > b ? b + a : b > a ? b - a : b) + " / </span>0" + a);
        } else {
            $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + " / </span>" + a);
        }
    });



    /*------------------
    	Projects Slider
    --------------------*/
    var project = $('#projects-carousel').owlCarousel({
        nav: true,
        loop: true,
        margin: 20,
        navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
        }
    });
    /* animate filter */
    var owlAnimateFilter = function(even) {
            $(this)
                .addClass('__loading')
                .delay(70 * $(this).parent().index())
                .queue(function() {
                    $(this).dequeue().removeClass('__loading')
                });
        }
        /* Projects filter */
    $('.projects-filter-nav li').on('click', function(e) {
        var filter_data = $(this).data('filter');

        /* return if current */
        if ($(this).hasClass('btn-active')) return;

        /* active current */
        $(this).addClass('btn-active').siblings().removeClass('btn-active');

        /* Filter */
        project.owlFilter(filter_data, function(_owl) {
            $(_owl).find('.single-project').each(owlAnimateFilter);
        });
    });



    /*------------------
    	Brands Slider
    --------------------*/
    $('#client-carousel').owlCarousel({
        nav: false,
        loop: true,
        margin: 20,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
        }
    });



    /*------------------
    	Review Slider
    --------------------*/
    var test_s = $("#test-slider");
    test_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        onInitialized: function() {
            var a = this.items().length;
            if (a < 10) {
                $("#snh-2").html("<span>01" + "/ </span>0" + a);
            } else {
                $("#snh-2").html("<span>01" + "/ </span>" + a);
            }
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index,
            a = a.item.count;
        if (a < 10) {
            $("#snh-2").html("<span>0" + (1 > b ? b + a : b > a ? b - a : b) + "/ </span>0" + a);
        } else {
            $("#snh-2").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "/ </span>" + a);
        }
    });



    /*------------------
		Service Slider
	--------------------*/
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
    });



    /*------------------
    	Popup
    --------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        mainClass: 'img-popup-warp',
        removalDelay: 400,
    });


    /*------------------
    	Accordions
    --------------------*/
    $('.panel-link').on('click', function(e) {
        $('.panel-link').parent('.panel-header').removeClass('active');
        var $this = $(this).parent('.panel-header');
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });



    //Set progress circle 1
    $("#progress1").circleProgress({
        value: 0.75,
        size: 195,
        thickness: 20,
        fill: "#F9CE34",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 2
    $("#progress2").circleProgress({
        value: 0.83,
        size: 195,
        thickness: 20,
        fill: "#F9CE34",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 3
    $("#progress3").circleProgress({
        value: 0.25,
        size: 195,
        thickness: 20,
        fill: "#F9CE34",
        emptyFill: "rgba(0, 0, 0, 0)"
    });
    //Set progress circle 4
    $("#progress4").circleProgress({
        value: 0.95,
        size: 195,
        thickness: 20,
        fill: "#F9CE34",
        emptyFill: "rgba(0, 0, 0, 0)"
    });

})(jQuery);


/*------------------
	Portfolio 
--------------------*/
function __portfolio() {

    portfolio_item_size();

    $(window).on('resize', function() {
        portfolio_item_size();
    });


    var $container = $('#portfolio');
    $container.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });

    // portfolio filter nav
    $('.portfolio-filter li').on("click", function() {
        $(".portfolio-filter li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}

/*------------------
	Portfolio grid
--------------------*/
function portfolio_item_size() {
    $('#portfolio').find('.grid-item').each(function() {
        var pi_height1 = $(this).outerWidth(true),
            pi_height2 = pi_height1 / 2;

        if ($(this).hasClass('grid-long') && window_w > 991) {
            $(this).css('height', pi_height2);
        } else {
            $(this).css('height', Math.abs(pi_height1));
        }
    });
}


if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/#') {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 1500,
            delay: 400,
            delay: (el, i) => 70 * i
        });


    //counter animation
    $('#counter').waypoint(function() {
        $('.milestones-section .aos-animate').ready(function() {
            $('.counter-value').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3500,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        });
    }, {
        offset: '100%'
    });
    var btn = $('#button');

    //back to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {});

    var download = $('#download');
    var chatButtons = $('#chatButton');
    var chatButtons1 = $('#chatButton1');
    var chatButtons2 = $('#chatButton2');

    //back to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            download.addClass('show');
            chatButtons.addClass('show');
            chatButtons1.addClass('show');
            chatButtons2.addClass('show');
        } else {
            download.removeClass('show');
            chatButtons.removeClass('show');
            chatButtons1.removeClass('show');
            chatButtons2.removeClass('show');
        }
    });
}


//sticky header

// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky + 500) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener('load', AOS.refresh)