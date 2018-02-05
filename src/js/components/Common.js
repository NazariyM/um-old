import '../modules/dev/noTouch';
import LangList from './LangList';
import fancybox from '@fancyapps/fancybox';
// import Header from './Header';
import { initSliders } from './initSliders';
import { initCharts } from './initCharts';
import { initPopups } from './initPopups';
// import CTabs from './c-tabs';

/**
 * Website's common scripts (example).
 *
 * @module Common
 */

export class Common {

  static init() {
    new LangList;
    initSliders();
    initCharts();
    initPopups();
  }
}

/** tabs init */
// const $tabs = $('.c-tabs');
// $tabs.each((index, el) => {
//   const tab = new CTabs($(el));
//   tab.init();
// });


$('[data-fancybox]').fancybox();

/** Export initialized common scripts by default */
export default Common.init();

const $scheduleIcon = $('.schedule__item-icon');

$scheduleIcon.on('mouseenter', function () {
  $(this).addClass('is-active');
  $('body').addClass('is-shadow');
});

$scheduleIcon.on('mouseleave', function () {
  $(this).removeClass('is-active');
  $('body').removeClass('is-shadow');
});