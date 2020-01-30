
import './assets/scss/main.scss'
// SmoothScroll
var scroll = new SmoothScroll('li>a[href*="#"]');
// Swiper
let Swiper = require('./js/swiper.min.js')
let swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });