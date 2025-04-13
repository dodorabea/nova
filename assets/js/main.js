(function ($) {
  "use strict";
  /*====Header==== */
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});


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
    loop: true,
   autoplay:true,
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
/*====Text Slider==== */
  var customerSwiper = new Swiper(".mySwiper.customerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      400: {
        slidesPerView: 1.5,
      },
      880: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*====Text Slider==== */
  var swiperSimilarProject = new Swiper(".mySwiper.similar-proj-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})(jQuery);
