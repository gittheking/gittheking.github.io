'use strict';
(() => {

  const background          = document.querySelector('.background-image');
  const body                = document.querySelector('body');
  const name                = document.querySelector('.name');

  background.style.height   = `${window.innerHeight}px`;
  background.style.width    = `${window.innerWidth}px`;
  name.style.height         = `${window.innerHeight}px`;
  name.style.width          = `${window.innerWidth}px`;
  name.style.backgroundSize = 'auto auto';

  document.addEventListener('mousemove', event => {
    const middleX              = window.innerWidth / 2;
    const middleY              = window.innerHeight / 2;
    background.style.transform = `perspective(1000px) 
                                  rotateX(${(-1)*(middleY - event.clientY)/90}deg) 
                                  rotateY(${(middleX - event.clientX)/160}deg)`;
    name.style.transform       = `perspective(10000px) 
                                  rotateX(${(middleY - event.clientY)/90}deg) 
                                  rotateY(${(middleX - event.clientX)/160}deg)
                                  translateY(-65%)`;
  });

  window.addEventListener('resize', event => {
    background.style.height   = `${window.innerHeight}px`;
    background.style.width    = `${window.innerWidth}px`;
    name.style.height         = `${window.innerHeight}px`;
    name.style.width          = `${window.innerWidth}px`;
    name.style.backgroundSize = 'auto auto';
  });

})();