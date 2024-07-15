// ハンバーガーメニュー開閉
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

if(burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  })
}

// 情報バナー表示
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner-pc');
  const scrollTrigger = 700; // スクロールして700px経過したら表示

  function toggleBanner() {
      if (window.scrollY >= scrollTrigger) {
          banner.classList.add('show');
      } else {
          banner.classList.remove('show');
      }
  }

  window.addEventListener('scroll', toggleBanner);
});

// topボタン
document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.top-btn');
  const scrollTrigger = 700; // スクロールして700px経過したら表示

  function toggleBanner() {
      if (window.scrollY >= scrollTrigger) {
          banner.classList.add('show');
      } else {
          banner.classList.remove('show');
      }
  }

  window.addEventListener('scroll', toggleBanner);
});