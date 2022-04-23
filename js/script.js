window.addEventListener('DOMContentLoaded', function() {
    // swiper
    var swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // tabs
    document.querySelectorAll('.work__item').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.work__content-desable').forEach(function(tabContent) {
          tabContent.classList.remove('work__content-active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
        document.querySelectorAll('.work__item').forEach(function(tabContent) {
          tabContent.classList.remove('work__btn-active');
        })
        document.querySelector(`[data-path="${path}"]`).classList.add('work__btn-active');
      });
    });

    // burger
    document.querySelector('.header__burger').addEventListener('click', function() {
      document.querySelector('.header__nav').classList.toggle('header__nav-item-active');
      })

});
