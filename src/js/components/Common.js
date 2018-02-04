import '../modules/dev/noTouch';
import LangList from './LangList';
import fancybox from '@fancyapps/fancybox';
// import Header from './Header';
// import objectFitVideos from 'object-fit-videos';
// import objectFitImages from 'object-fit-images';
import { initSliders } from './initSliders';
import { initCharts } from './initCharts';
// import { initAccordion } from './initAccordion';
import Popup from 'vintage-popup';
// import CTabs from './c-tabs';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    new LangList;
    // objectFitImages();
    initSliders();
    initCharts();
    // initAccordion();
  }
}

/** tabs init */
// const $tabs = $('.c-tabs');
// $tabs.each((index, el) => {
//   const tab = new CTabs($(el));
//   tab.init();
// });

/** popup init*/
Popup.expose($);
const $popup = $('[data-popup-target]');

$popup.popup();

$('[data-fancybox]').fancybox();

/** Export initialized common scripts by default */
export default Common.init();

const $scheduleIcon = $('.schedule__item-icon');

$scheduleIcon.on('mouseenter', function () {
  $('body').addClass('is-shadow');
});

$scheduleIcon.on('mouseleave', function () {
  $('body').removeClass('is-shadow');
});