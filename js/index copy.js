window.onload = () => {
  var slide1 = document.querySelector(".slide1");
  var slide2 = document.querySelector(".slide2");
  var slide3 = document.querySelector(".slide3");
  var slide4 = document.querySelector(".slide4");
  slide1.onmouseenter = () => {

  };
  slide1.onmouseleave = () => {
  
  };

  // 第一部分圖片swiper
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
};
