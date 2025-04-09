import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
  });
});
