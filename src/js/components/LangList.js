import { $document } from '../modules/dev/_helpers';

export default class LangList {
  constructor() {
    this.$langList = $('.js-lang-list');
    this.$langSub = this.$langList.find('.lang__list-items');

    if (this.$langList.length) this.switch();
  }

  switch() {
    const _this = this;

    _this.$langList.find('.is-active > a').on('click', function (e) {
      e.preventDefault();
    });
    _this.$langList.on('click', function () {
      $(this).toggleClass('is-active');
      _this.$langSub.slideToggle({
        duration: 300,
        easing: 'swing'
      });
    });

    $document.on('click', function (e) {
      if ($(e.target).closest(_this.$langList).length !== 0) {

      } else {
        _this.$langSub.slideUp({
          duration: 300,
          easing: 'swing'
        });
        _this.$langList.removeClass('is-active');
      }
    });
  }
}