import { $document } from '../modules/dev/_helpers';

export default class LangList {
  constructor() {
    this.$langList = $('.js-lang-list');

    if (this.$langList.length) this.switch();
  }

  switch() {
    this.$langList.each(function () {
      const $this = $(this);
      const $currentLink = $this.find('.lang__link');

      $currentLink.on('click', function (e) {
        e.preventDefault();
      });

      $this.on('click', function (ev) {

        $(this).toggleClass('is-active');
      });

      $document.on('click', function (e) {
        if ($(e.target).closest($this).length !== 0) {

        } else {
          $this.removeClass('is-active');
        }
      });
    });

  }
}