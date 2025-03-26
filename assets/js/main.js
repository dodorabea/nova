(function ($) {
  "use strict";
  /*====Dom is loaded==== */
 
  /*=====AOS animation=====*/
  AOS.init({
    // Global settings:
    duration: 900,
    easing: "ease-in-cubic",
    disable: "mobile",
  });
  AOS.refresh();
  /*====Back to top==== */
  var amountScrolled = 200;
  var amountScrolledNav = 25;
  $(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
      $("button.back-to-top").addClass("show");
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });

  $("button.back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
 /*====Back to top==== */
  var brandSwiper = new Swiper(".mySwiper.brands", {
    slidesPerView: 1.75,
    spaceBetween: 10,
    // speed: 18000,
    // direction: "horizontal",
    loop: true,
   // autoplay:true,
    // autoplay: {
    //   delay: 0,
    // },
    // freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 1.75,
      },
      400: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 3,
      },
      880: {
        slidesPerView: 4,
      },
      1025: {
        slidesPerView: 5,
      },
      1366: {
        slidesPerView: 6,
      },
    },
  });
/*====Text Slider==== */
  var textSwiper = new Swiper(".mySwiper.slider-text", {
    slidesPerView: 1,
    loop: true,
    direction: "vertical",
    autoplay:true,
  });
})(jQuery);
