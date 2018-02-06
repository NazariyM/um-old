import {$window, $body, $header, $scrolledElements, css} from '../modules/dev/_helpers';
import Popup from 'vintage-popup';

export function initPopups() {
  // for system popup
  $window.on('load', function () {
    setTimeout(function () {
      $body.removeAttr('style');
    }, 500);
  });

  Popup.expose($);

  const $systemBtn = $('.js-system-popup');
  const $systemItem = $('.system__item');

  const $popupInstance = $('[data-popup-target="system-popup"]').popup({
    closeOnResize: true,
    lockScreen: false,
    afterClose: function (popup) {

      $header.removeClass('is-overlapped');
      $systemItem.each(function () {
        $(this).removeClass('is-visible');
      });
    }
  });

  $systemBtn.on('click', function () {
    $scrolledElements.stop().animate({scrollTop: 330}, 500, 'swing');

    setTimeout(function () {

      $systemItem.each(function () {
        $(this).addClass('is-visible');
      });
      $header.addClass('is-overlapped');
      $popupInstance.open();
    }, 500);
  });

  // init all pop-ups, but in this case - login pop-up
  const $popup = $('[data-popup-target]');

  $popup.popup();

  const $regBtn = $('.entry__nav-btn').eq(1);

  $regBtn.on('mouseenter', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
  $regBtn.on('mouseleave', function () {
    $(this).siblings().addClass('is-active');
    $(this).removeClass('is-active');
  });

  $regBtn.on('click', function () {
    $(this).removeClass('is-active');
    $(this).siblings().addClass('is-active');
  });

}