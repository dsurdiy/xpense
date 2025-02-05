"use strict";

window.addEventListener("load", windowLoad);

function windowLoad() {
   document.addEventListener("click", documentActions);
}


function documentActions(e) {
   const targetElement = e.target;
   const bodyEl = document.body;

   if (targetElement.closest(".menu-icon")) {
      bodyEl.classList.toggle("menu-open");
   }

   if (targetElement.closest(".menu__link") && bodyEl.classList.contains("menu-open")) {
      bodyEl.classList.remove("menu-open");
   }

   if (targetElement.hasAttribute("data-goto")) {
      e.preventDefault();
      const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
      if (gotoElement) {
         window.scrollTo({
            top: gotoElement.offsetTop,
            behavior: "smooth",
         });
      }
   }
}

if (document.querySelector('.testimonials__swiper')) {
   new Swiper('.testimonials__swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      // Брейкпоінти
      breakpoints: {
         520: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 30,
         }
      },

   });
}


// -------------- Animations (IntersectionObserver) -------------------

// const items = document.querySelectorAll("[data-watch]");
// const options = {
//    threshold: 0.2,
// }
// const callback = (entries) => {
//    entries.forEach(entry => {
//       entry.isIntersecting ? entry.target.classList.add("active") : entry.target.classList.remove("active");
//    });
// }
// const observer = new IntersectionObserver(callback, options);

// items.forEach(item => {
//    observer.observe(item);
// });