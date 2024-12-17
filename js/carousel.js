$(document).ready(function () {
//   //Story slider
//   $(".story__slider").slick({
//     infinite: true,
//     prevArrow:
//       '<button type="button" class="slick-prev arrow-left--colored"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next arrow-right--colored"></button>',
//   });

  //Photo slider
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    renderFraction: function (currentClass, totalClass) {
      return `<span class="${0 + currentClass} "></span>' +
              ' / ' +
              '<span class="${0 + totalClass} "></span>`;
    },
  });

  $(".swiper-slide-active")
    .siblings(".swiper-slide")
    .css("margin-right", "32px");
});
