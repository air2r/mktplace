(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {
        $(".mobile-menu").click(function () {
            $("body").toggleClass("transform-active");
        });
                $(".show-accordion").click(function () {
            $(".accordion").toggleClass("acco-show");
            });
                $(".pc-none.mobile-src").click(function () {
            $(".menu-src-bar").slideToggle("slow");
            
        });
                $(".top-header-close").click(function () {
            $(".top-header").slideUp("slow");
            
        });
   
    
       // Slider
        $('.slider-active').owlCarousel({
            loop: true,
            responsiveClass: true,
            items: 1,
            nav: false,
            autoplay: true,
        autoPlaySpeed: 5000,
        autoplayTimeout:10000,
        });
        
        
             $('.agencies-item-active').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    loop: false
                }
            }
        });
        
        });
    

//     var input = document.querySelector("#phone");
//        window.intlTelInput(input, {
//            preferredCountries: ['mz', 'jp'],
//     });
//        var input = document.querySelector("#phone1");
//        window.intlTelInput(input, {
//            preferredCountries: ['mz', 'jp'],
//        });
//        var input = document.querySelector("#phone3");
//        window.intlTelInput(input, {
//            preferredCountries: ['mz', 'jp'],
//        });
//        var input = document.querySelector("#phone4");
//        window.intlTelInput(input, {
//            preferredCountries: ['mz', 'jp'],
//        });
    
    
       //   scrollTop  =========================

//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 50) {
//            $('#back-to-top').fadeIn();
//        } else {
//            $('#back-to-top').fadeOut();
//        }
//    });

    // scroll body to 0px on click =================
    
        //scroll 
    
           $(window).scroll(function () {
           if ($(window).scrollTop() > 0) {
               $('body').addClass('sticky');
           } else {
               $('body').removeClass('sticky');
            }
       });
    
})(jQuery);

// Hamburger  menu
function myFunction(x) {
    x.classList.toggle("change");
}
