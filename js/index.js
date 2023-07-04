window.onload = () => {
  var slide1 = document.querySelector(".slide1");
  var slide2 = document.querySelector(".slide2");
  var slide3 = document.querySelector(".slide3");
  var slide4 = document.querySelector(".slide4");
  slide1.onmouseenter = () => {
    document.querySelector(".swiper-slide-png01").classList.add("hovered");
    document.querySelector(".swiper-slide-png01").style.backgroundImage =
    'url("../png/container01-B.png")';
    slide1.innerHTML = `
    <h1 class="white-font big-size">01</h1>
    <h1 class="white-font">隨時隨地<br>隨即隨拍</h1>
    <div class="divide small-margin"></div>
    <p class="white-font">一般來說，攝影師的專業會在作品集上表現出來，但通常你無法得知他的作品是否都是他本人所擁有。因此攝影師要成為我們的合作夥伴需要透過層層的考試及審核，才能成為我們pikmi的合作夥伴。</p>`;
  };
  slide1.onmouseleave = () => {
    document.querySelector(".swiper-slide-png01").style.backgroundImage =
    // 'url("../png/container01.png")';
      "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container01.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide1.innerHTML = `
    <h1 class="white-font big-size">01</h1>
    <h1 class="white-font">隨時隨地<br>隨即隨拍</h1>
    <div class="divide small-margin"></div>
    <p class="white-font">還在擔心人生高光沒被記錄到?</p>`;
  };
  slide2.onmouseenter = () => {
    document.querySelector(".swiper-slide-png02").classList.add("hovered");
    document.querySelector(".swiper-slide-png02").style.backgroundImage =
    "url('../png/container02-B.png')";
      // "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container02-B.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide2.innerHTML = `
    <h1 class="white-font big-size">02</h1>
    <h1 class="white-font">官方認證攝影師</h1>
    <div class="divide small-margin"></div>
        <p class="white-font">一般來說，攝影師的專業會在作品集上表現出來，但通常你無法得知他的作品是否都是他本人所擁有。因此攝影師要成為我們的合作夥伴需要透過層層的考試及審核，才能成為我們pikmi的合作夥伴。</p>`;
  };
  slide2.onmouseleave = () => {
    document.querySelector(".swiper-slide-png02").style.backgroundImage =
      "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container01.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide2.innerHTML = `
    <h1 class="white-font big-size">02</h1>
            <h1 class="white-font">官方認證攝影師</h1>
            <div class="divide small-margin"></div>
             <p class="white-font">我不知道他攝影專不專業欸?</p>`;
  };
  slide3.onmouseenter = () => {
    document.querySelector(".swiper-slide-png03").classList.add("hovered");
    document.querySelector(".swiper-slide-png03").style.backgroundImage =
    "url('../png/container03-B.png')";
      // "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container03-B.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide3.innerHTML = `
    <h1 class="white-font big-size">03</h1>
    <h1 class="white-font">更平價<br>更專業</h1>
    <div class="divide small-margin"></div>
        <p class="white-font">攝影接案的價格在不同的狀況下有所差異且不夠透明化，使mi粉與剛起步的接案攝影師不知如何詢價、報價，甚至造成不必要的爭議，降低了交易效率。
        所以Pikmi提供透明化價格的介面來維穩制度，讓攝影師自定義其市場定位，也讓mi粉對於不同質量的攝影作品有基礎的行情概念，從而讓雙方能夠藉由明確的價格來尋找對應各自供需的攝影師及mi粉。</p>`;
  };
  slide3.onmouseleave = () => {
  
    document.querySelector(".swiper-slide-png03").style.backgroundImage =
      "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container01.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide3.innerHTML = `
    <h1 class="white-font big-size">03</h1>
             <h1 class="white-font">更平價<br>更專業</h1>
             <div class="divide small-margin"></div>
              <p class="white-font">為什麼市場上的攝影師報價都要這麼貴!</p>`;
  };
  slide4.onmouseenter = () => {
    document.querySelector(".swiper-slide-png04").classList.add("hovered");
    document.querySelector(".swiper-slide-png04").style.backgroundImage =
        "url('../png/container04-B.png')";
      // "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container04-B.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide4.innerHTML = `
    <h1 class="white-font big-size">04</h1>
    <h1 class="white-font text-middle">評價機制<br>拍攝不踩雷</h1>
    <div class="divide small-margin"></div>
        <p class="white-font">以往攝影案件之間的交易程序不外乎是攝影師和客戶間需要進行直接交易並自行協商付款方式、時間和交易條件等，這造成交易常常有風險、過程變得繁瑣。
        Pikmi當然視上述狀況為優先排除的問題，我們選擇採用第三方支付的方式來確保雙方交易的安全性及便利性，這樣不僅能夠提高可信度以降低風險，更能打造一個良好的平台環境。
        </p>`;
  };
  slide4.onmouseleave = () => {
    document.querySelector(".swiper-slide-png04").style.backgroundImage =
      "url('https://github.com/Raymond870307/Pikmi/blob/master/png/container01.png?raw=true/Pikmi/blob/master/png/pic01.png?raw=true')";
    slide4.innerHTML = `
    <h1 class="white-font big-size">04</h1>
    <h1 class="white-font text-middle">評價機制<br>拍攝不踩雷</h1>
    <div class="divide small-margin"></div>
    <p class="white-font">看不到他過往的接案狀況，我怎麼知道他雷不雷!</p>`;
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
