"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    webOS: function () {
      return navigator.userAgent.match(/webOS/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows() ||
        isMobile.webOS()
      );
    }
  };

  if (isMobile.any()) {
    document.body.classList.add('__touch');

    let menuArrows = document.querySelectorAll('.header__menu__item__arrow');

    if (menuArrows.length > 0) {
      for (let i = 0; i < menuArrows.length; i++) {
        const menuArrow = menuArrows[i];
            
        menuArrow.addEventListener('click', function (e) {
          menuArrow.parentElement.classList.toggle('__active');
        });
      }
    };
  } else {
    document.body.classList.add('__pc');
  }



  const returnBtn = document.querySelector('.return__btn');

  document.addEventListener('scroll', function () {
    if (scrollY >= 100) {
      returnBtn.classList.remove('hidden');
    } else {
      returnBtn.classList.add('hidden');
    };
  });

  returnBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  });



  const burgerIcon = document.querySelectorAll('.burger');

  const menuBody = document.querySelectorAll('.header__menu__body');
  

  if (burgerIcon) {

    burgerIcon.forEach((burgerBtn, index) => {
      burgerBtn.addEventListener('click', (e) => {
        console.log("target: ", e.target);

        burgerBtn.classList.toggle('__active');
        menuBody[index].classList.toggle('__active');
      })
    })

  };

  


  const timerElement = document.getElementById('timer');
  const targetElementFirst = document.querySelectorAll('.first');
  const targetElementSecond = document.querySelectorAll('.second');
  
  const startTime = 5; 
  let timeRemaining = startTime;

  function updateTimer() {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

      if (timeRemaining === 0) {
          toggleElements();
          resetTimer();
      } else {
          timeRemaining--;
      }
  }

  function toggleElements() {

    
    targetElementFirst.forEach((elem, index) => {
      elem.classList.toggle('hidden');
    })

    targetElementSecond.forEach((elem, index) => {
      elem.classList.toggle('hidden');
    })
  }

  function resetTimer() {
      timeRemaining = startTime;
      updateTimer(); 
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  
});