$(".banner-carousel").owlCarousel({
  margin: 20,
  autoplay: true,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-caret-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-caret-right next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    275: {
      items: 2,
      slideBy: 1,
    },
    475: {
      items: 3,
      slideBy: 1,
    },
    // 768: {
    //   items: 3,
    //   slideBy: 1,
    // },
    991: {
      items: 4,
      slideBy: 1,
    },
  },
});