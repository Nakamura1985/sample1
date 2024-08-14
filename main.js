'use strict';

// ここからCarousel

{
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    // if (currentIndex === 2) {
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    // ul.style.transform = `translateX(${-100 * currentIndex}%)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        // dots.forEach(dot => {
        //   dot.classList.remove('current');
        // });
        // dots[currentIndex].classList.add('current');
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
    // const slideWidth = slides[0].getBoundingClientRect().width;
    // ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });
}

// ここからaccordion

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}

// ここからTabMenu

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active')
      });
      document.querySelector('#' + clickedItem.dataset.id).classList.add('active');
    });
  });
}
