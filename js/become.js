window.onload = () => {
  var step1 = document.querySelector(".step1_btn");
  var step2 = document.querySelector(".step2_btn");
  var step3 = document.querySelector(".step3_btn");
  var step4 = document.querySelector(".step4_btn");
  var isExpanded1 = false;
  var isExpanded2 = false;
  var isExpanded3 = false;
  var isExpanded4 = false;

  if(window.innerWidth<900){
    step1.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded1) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_intro.png')";
        step1.style.width = "85.5vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded1 = !isExpanded1;
    });
    step2.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded2) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_intro.jpg')";
        step2.style.width = "85.5vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded2 = !isExpanded2;
    });
    step3.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded3) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_intro.jpg')";
        step3.style.width = "85.5vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded3 = !isExpanded3;
    });
    step4.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded4) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_intro.jpg')";
        step4.style.width = "85.5vh";
      }
      isExpanded4 = !isExpanded4;
    });
  }else{
    step1.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded1) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_intro.png')";
        step1.style.width = "85.5vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded1 = !isExpanded1;
    });
    step2.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded2) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_intro.jpg')";
        step2.style.width = "85.5vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded2 = !isExpanded2;
    });
    step3.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded3) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_intro.jpg')";
        step3.style.width = "85.5vh";
        step4.style.backgroundImage = "url('../png/step4_btn.png')";
        step4.style.width = "10vh";
      }
      isExpanded3 = !isExpanded3;
    });
    step4.addEventListener("click", function () {
      this.classList.add("animate");
      if (isExpanded4) {
        step1.style.backgroundImage = "url('../png/step1.png')";
        step1.style.width = "30vh";
        step2.style.backgroundImage = "url('../png/step2.png')";
        step2.style.width = "30vh";
        step3.style.backgroundImage = "url('../png/step3.png')";
        step3.style.width = "30vh";
        step4.style.backgroundImage = "url('../png/step4.png')";
        step4.style.width = "30vh";
      } else {
        step1.style.backgroundImage = "url('../png/step1_btn.png')";
        step1.style.width = "10vh";
        step2.style.backgroundImage = "url('../png/step2_btn.png')";
        step2.style.width = "10vh";
        step3.style.backgroundImage = "url('../png/step3_btn.png')";
        step3.style.width = "10vh";
        step4.style.backgroundImage = "url('../png/step4_intro.jpg')";
        step4.style.width = "85.5vh";
      }
      isExpanded4 = !isExpanded4;
    });
  }
};
