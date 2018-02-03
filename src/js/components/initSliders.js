import slick from 'slick-carousel';

export function initSliders() {

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    prevArrow: `<button type="button" class="slider-btn slider-btn_prev"></button>`,
    nextArrow: `<button type="button" class="slider-btn slider-btn_next"></button>`,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  // const $learnSld = $('.js-learn-slider');
  // $learnSld.slick($.extend({}, defaultOptions, {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   speed: 500,
  //   responsive: [
  //     {
  //       breakpoint: 1023,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: true
  //       }
  //     }, {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         arrows: false,
  //         adaptiveHeight: true
  //       }
  //     }
  //   ]
  // }));

  const $chartSld = $('.js-chart');
  const $chartNav = $('.js-chart-nav');

  $chartSld.on('init', function(event, slick) {
    setTimeout(function () {
      $chartSld.slick('slickGoTo', 1, true);
    }, 0);
  });

  $chartSld.slick($.extend({}, defaultOptions, {
    arrows: false,
    speed: 500,
    asNavFor: $chartNav
  }));

  $chartNav.slick($.extend({}, defaultOptions, {
    arrows: false,
    speed: 500,
    fade: true,
    dots: true,
    asNavFor: $chartSld,
    dotsClass: 'chart__nav-dots'
  }));
}