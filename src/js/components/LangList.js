import { $document } from '../modules/dev/_helpers';

export default class LangList {
  constructor() {
    this.$langList = $('.js-lang-list');

    if (this.$langList.length) this.switch();
  }

  switch() {
    this.$langList.each(function () {
      const $this = $(this);
      const $langSub = $this.find('.lang__list-items');

      $this.on('click', function (ev) {
        const currentLink = ev.target.closest('.lang__link');

        if (currentLink) {
          ev.preventDefault();
        }

        $(this).toggleClass('is-active');
        $langSub.slideToggle({
          duration: 300,
          easing: 'swing'
        });
      });

      $document.on('click', function (e) {
        if ($(e.target).closest($this).length !== 0) {

        } else {
          $langSub.slideUp({
            duration: 300,
            easing: 'swing'
          });
          $this.removeClass('is-active');
        }
      });
    });

  }
}