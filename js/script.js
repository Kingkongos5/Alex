
// Header ==============================================

const header = document.querySelector('.header')
const burger = document.querySelector('.header__active');
const nav = document.querySelector('.nav__items');
const Tabsbtn = document.querySelector('.exp__company');

const tabsOne = document.querySelector('.exp__company-name:nth-child(1)')
const tabsTwo = document.querySelector('.exp__company-name:nth-child(2)')
const tabsThree = document.querySelector('.exp__company-name:nth-child(3)')
const tabsFour = document.querySelector('.exp__company-name:nth-child(4)')

console.log(tabsOne);

addEventListener("click", openBurger);
Tabsbtn.addEventListener("click", tabsBtn);

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

window.addEventListener("wheel", scrollHeader);

function scrollHeader(e) {
   if (window.innerWidth >= 798.98) {
      // if mouse whell spins up header appears
      if (e.deltaY < 0) {
         if (header.classList[1] == 'active') {
            header.classList.remove('active')
         }
      }
      // if mouse whell spins down header removes
      if (e.deltaY > 0) {
         if (!(header.classList[1] == 'active')) {
            header.classList.add('active')
         }
      }
   }
}

// Tabs ============================================

function tabsBtn(e) {
   /*if (e.target.closest('.exp__company')) {
      const btn = document.querySelectorAll('.exp__company-name')
      btn.forEach((active) => { active.classList.remove('active');})
      e.target.classList.add('active')
      e.target.classList.add('_icon-next')
      console.log(456);
      //console.log(document.querySelectorAll('.exp__company-name button'));
   }*/
   if (e.target.classList[1] != 'active') {
      if (e.target.closest('.exp__company-name')) {
         const btn = document.querySelectorAll('.exp__company-name')
         if (e.target.classList == 'exp__company-name') {
            btn.forEach((active) => { active.classList.remove('active'); })
            e.target.classList.add('active')
         } else {
            btn.forEach((active) => { active.classList.remove('active'); })
            e.target.parentNode.classList.add('active')
         }
         btn.forEach((btn) => {
            if (btn.classList[1] == 'active') {
               const el = document.querySelectorAll('.company-body__content').forEach((text) => {
                  text.classList.remove('active')
               });
               if (btn.textContent == "Apple") {
                  const block = document.querySelector('.company-body__content:nth-child(1)')
                  block.classList.add('active')
               }
               if (btn.textContent == "Microsoft") {
                  const block = document.querySelector('.company-body__content:nth-child(2)')
                  block.classList.add('active')
               }
               if (btn.textContent == "Facebook") {
                  const block = document.querySelector('.company-body__content:nth-child(3)')
                  block.classList.add('active')
               }
               if (btn.textContent == "Slack") {
                  const block = document.querySelector('.company-body__content:nth-child(4)')
                  block.classList.add('active')
               }
            }
         });
      }
   }
}

