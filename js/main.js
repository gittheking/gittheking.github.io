'use strict';
( function() {

  var background          = document.querySelector('.background-image');
  var body                = document.querySelector('body');
  var name                = document.querySelector('.name');
  var modal               = document.querySelector('.modal-container');
  var close               = document.querySelector('.close');

  background.style.height   = `${window.innerHeight}px`;
  background.style.width    = `${window.innerWidth}px`;
  name.style.height         = `${window.innerHeight}px`;
  name.style.width          = `${window.innerWidth}px`;
  name.style.backgroundSize = 'auto auto';

  document.addEventListener('mousemove', event => {
    var middleX              = window.innerWidth / 2;
    var middleY              = window.innerHeight / 2;
    background.style.transform = `perspective(1000px) 
                                  rotateX(${(-1)*(middleY - event.clientY)/90}deg) 
                                  rotateY(${(middleX - event.clientX)/160}deg)`;
    name.style.transform       = `perspective(10000px) 
                                  rotateX(${(middleY - event.clientY)/90}deg) 
                                  rotateY(${(middleX - event.clientX)/160}deg)
                                  translateY(-${window.innerWidth > 768 ? 65 : 85 }%)`;
  });

  name.addEventListener('click', event => {
    modal.style.visibility  = 'visible';
    modal.style.opacity     = '0.8';
    modal.style.height      = `${window.innerHeight}px`;
    modal.style.width       = `${window.innerWidth}px`
  });

  close.addEventListener('click', event => {
    modal.style.visibility  = 'hidden';
    modal.style.opacity     = '0';
  });

  window.addEventListener('resize', event => {
    background.style.height   = `${window.innerHeight}px`;
    background.style.width    = `${window.innerWidth}px`;
    name.style.height         = `${window.innerHeight}px`;
    name.style.width          = `${window.innerWidth}px`;
    name.style.backgroundSize = 'auto auto';
    name.style.transform      = `translateY(-${window.innerWidth > 768 ? 65 : 85 }%)`;
    modal.style.height        = `${window.innerHeight}px`;
    modal.style.width         = `${window.innerWidth}px`
  });

})();