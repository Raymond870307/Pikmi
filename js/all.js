// 初始化 Swiper
var mySwiper = new Swiper('.swiper-container', {
    // 設置輪播方向，垂直或水平
    direction: 'horizontal',
    // 設置自動輪播
    autoplay: {
      delay: 1200,
    },
    // 如果需要導航按鈕
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 如果需要分頁器
    pagination: {
      el: '.swiper-pagination',
    },
  });