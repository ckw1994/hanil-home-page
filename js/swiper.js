// swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay:5000,
    },
    speed: 2000, // 전환효과시간
    direction: 'horizontal',
    effect: 'fade',
    loop: true,
  
    // If we need pagination
    // 하단 버튼 UI
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

  });


  var swiper2 = new Swiper(".swiper2", {
      autoplay: {
        delay:5000,
    },
    speed: 4000, // 전환효과시간
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
$(function(){

  $('#gnb > ul > li').hover  
  
})