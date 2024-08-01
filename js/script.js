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

// topボタン表示
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

// 時間差で.dedication-containerを表示
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      const container = document.querySelector('.dedication-container');
      container.classList.add('visible');
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // イントロダクションセクションのアニメーション
  gsap.from('.introduction img', {
    scrollTrigger: {
      trigger: '.introduction',
      start: 'top center',
      end: 'top center',
      scrub: 3,
    },
    opacity: 0,
    scale: 0.8,
    rotation: 0,
    duration: 3
  });

  // メニューセクションのアニメーション
  gsap.from('.shopmenu img', {
    scrollTrigger: {
      trigger: '.shopmenu',
      start: 'top center',
      end: 'top center',
      scrub: 3,
    },
    x: '-100%',
    opacity: 0,
    duration: 3
  });

  // コースセクションのアニメーション
  gsap.from('.course img', {
    scrollTrigger: {
      trigger: '.course',
      start: 'top center',
      end: 'top center',
      scrub: 3
    },
      x: '100%',
    opacity: 0,
    duration: 3
  });

  // 空間セクションのアニメーション
gsap.from('.space img', {
  scrollTrigger: {
    trigger: '.space',
    start: 'top center',
    end: 'top center',
    scrub: 3,
  },
  x: '-100%',
  opacity: 0,
  duration: 3
});
});