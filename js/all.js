var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: {
      delay: 1200,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true // 加入 loop 選項
  });
  