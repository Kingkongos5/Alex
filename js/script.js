
// Header ==============================================

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav__items');

burger.addEventListener("click", openBurger);

function openBurger(e){
   if (e.target.closest('.haeder__burger')){
      burger.classList.toggle('active');
      nav.classList.toggle('active');
   }
   if (!e.target.closest('.haeder__burger')){
      burger.classList.toggle('active');
      nav.classList.toggle('active');
   }
}

// =====================================================

