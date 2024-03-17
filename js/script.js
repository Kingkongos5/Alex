
// Header ==============================================

const header = document.querySelector('.header')
const burger = document.querySelector('.header__active');
const nav = document.querySelector('.nav__items');

addEventListener("click", openBurger);

function openBurger(e) {

   if (e.target.closest('.header__burger')) {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
   }
   if (!e.target.closest('.header__burger')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
   }
}

// Header - animation ==================================

const observ = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(123);
      entry.isIntersecting ? header.classList.add("active") : header.classList.remove('active');
   });
},
   {
      threshold: [0.6]
   }
);



document.querySelectorAll('.page3').forEach((page) => {observ.observe(page)})


