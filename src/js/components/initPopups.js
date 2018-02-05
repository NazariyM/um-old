import {$window, $body, $scrolledElements} from '../modules/dev/_helpers';
import Popup from 'vintage-popup';

export function initPopups() {
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

      $popupInstance.open();
    }, 500);
  });
}