/*  ---------------------------------------------------
    Author: Josh
    Author URI: https://twitter.com/HodJosias
---------------------------------------------------------  */

$( document ).ready(function ($) {
    
    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").delay(2000).fadeOut();
    //     $("#preloader").delay(2000).fadeOut("slow");
    // });
    
    new WOW().init();
    
    // Burger click
    $('#burger').click(() => {
        $('#burger').toggleClass('active')
        $('.nav').toggleClass('active')
    })

    //carousel
    $('.hero-slide').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplayHoverPause: true,
        autoplay:true,
        autoplayTimeout:2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        touchDrag: false,
        items: 1,
    });

    $('.products-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        dots:true,
        navText:['<i class="w-10 h-10" data-feather="chevron-left"></i>','<i class="w-10 h-10 mx-auto" data-feather="chevron-right"></i>'],
        autoplayHoverPause: true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                nav: false,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
                margin: 20,
            },
            1280:{
                items:4,
                margin:30,
            }
        }
    });

});