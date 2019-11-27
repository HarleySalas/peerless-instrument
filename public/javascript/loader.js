'use strict';

var loader = document.getElementById('loader');
window.loaded = false;

function animateLoaderOut() {
  /*Delay to give the initial load animation time to finish
  and not make it look wonky if the page loads fast.
  */
  setTimeout(function () {
    loader.classList.add('loader__animateOut');
  }, 2420)
}

window.onload = animateLoaderOut;

if (loader) {
  loader.addEventListener('webkitAnimationEnd', destroyLoader);
  loader.addEventListener('animationend', destroyLoader);
}

function destroyLoader(e) {
  if (e.srcElement.id === 'loader') {
    loader.parentNode.removeChild(loader);
    loader.removeEventListener('webkitAnimationEnd', destroyLoader);
    loader.removeEventListener('animationend', destroyLoader);
    window.loaded = true;
  }
}

