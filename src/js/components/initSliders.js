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

  const $chartSld = $('.js-chart-slider');
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

  const $systemSld = $('.js-system-slider');

  $systemSld.slick({
    centerMode: true,
    focusOnSelect: true,
    useTransform: true,
    centerPadding: '25%',
    cssEase: 'ease-in-out',
    variableHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    rows: 0,
    infinite: false,
    accessibility: false,
    prevArrow: '<button type="button" class="system-slider__arr system-slider__arr_prev">' +
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="26"\n' +
    '     viewBox="0 0 14 26">\n' +
    '    <defs>\n' +
    '        <path id="smfca"\n' +
    '              d="M721.42 692.73c.18.18.4.27.66.27a.92.92 0 0 0 .65-1.57L711.25 680l11.48-11.43a.92.92 0 0 0 0-1.3.93.93 0 0 0-1.3 0l-12.16 12.08a.92.92 0 0 0 0 1.3z"/>\n' +
    '    </defs>\n' +
    '    <g>\n' +
    '        <g transform="translate(-709 -667)">\n' +
    '            <use xlink:href="#smfca"/>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg></button>',
    nextArrow: '<button type="button" class="system-slider__arr system-slider__arr_next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="26"\n' +
    '     viewBox="0 0 14 26">\n' +
    '    <defs>\n' +
    '        <path id="ax7ua"\n' +
    '              d="M1204.58 692.73a.9.9 0 0 1-.66.27.92.92 0 0 1-.65-1.57l11.48-11.43-11.48-11.43a.92.92 0 0 1 0-1.3.93.93 0 0 1 1.3 0l12.16 12.08c.36.36.36.94 0 1.3z"/>\n' +
    '    </defs>\n' +
    '    <g>\n' +
    '        <g transform="translate(-1203 -667)">\n' +
    '            <use xlink:href="#ax7ua"/>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        centerMode: false,
        centerPadding: 0
      }
    }]
  });
}