'use strict';
( function() {

  var background            = document.querySelector('.background-image');
  var body                  = document.querySelector('body');
  var name                  = document.querySelector('.name');
  var modal                 = document.querySelector('.modal-container');
  var close                 = document.querySelector('.close');

  background.style.height   = `${window.innerHeight}px`;
  background.style.width    = `${window.innerWidth}px`;
  name.style.backgroundSize = 'auto auto';

  if (navigator.vendor.indexOf('Apple') < 0) {
    document.addEventListener('mousemove', function (event) {
      var middleX              = window.innerWidth / 2;
      var middleY              = window.innerHeight / 2;
      background.style.transform = `perspective(1000px) 
                                    rotateX(${(-1)*(middleY - event.clientY)/90}deg) 
                                    rotateY(${(middleX - event.clientX)/160}deg)`;
      name.style.transform       = `perspective(10000px) 
                                    rotateX(${(middleY - event.clientY)/90}deg) 
                                    rotateY(${(middleX - event.clientX)/160}deg)
                                    translateY(-${window.innerWidth > 768 ? 50 : 75 }%)`;
    });
  }

  // button.addEventListener('click', function(event) {
  //   modal.style.visibility  = 'visible';
  //   modal.style.opacity     = '0.8';
  //   modal.style.height      = `${window.innerHeight}px`;
  //   modal.style.width       = `${window.innerWidth}px`
  // });

  close.addEventListener('click', function(event) {
    modal.style.visibility  = 'hidden';
    modal.style.opacity     = '0';
  });

  window.addEventListener('resize', function(event) {
    background.style.height   = `${window.innerHeight}px`;
    background.style.width    = `${window.innerWidth}px`;
    name.style.backgroundSize = 'auto auto';
    name.style.transform      = `translateY(-${window.innerWidth > 768 ? 50 : 75 }%)`;
    modal.style.height        = `${window.innerHeight}px`;
    modal.style.width         = `${window.innerWidth}px`
  });

})();
