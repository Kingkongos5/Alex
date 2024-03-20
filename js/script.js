
// Header ==============================================

const header = document.querySelector('.header')
const burger = document.querySelector('.header__active');
const nav = document.querySelector('.nav__items');
const Tabsbtn = document.querySelector('.exp__company');

addEventListener("click", openBurger);
Tabsbtn.addEventListener("click", tabsBtn);

function openBurger(e) {

   if (e.target.closest('.header__burger')) {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
   }
   if (((!e.target.closest('.header__burger') && (!e.target.closest('.nav__items'))) || e.target.closest('.nav__item'))) {
      burger.classList.remove('active');
      nav.classList.remove('active');
   }
}



// Tabs ============================================

function tabsBtn(e) {
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

// Forms =================================

addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById('form')
   form.addEventListener('submit', sendForm);

   async function sendForm(e) {
      e.preventDefault();

      const btn = document.querySelector('.form__body-btn');
      let error = formValidate(form);

      if (error === 0) {
         if (!btn.classList.contains('_submit')) {
            btn.classList.add('_submit')
            setTimeout(function () {
               btn.classList.remove('_submit')
            }, 1200);
            setTimeout(function () {
               btn.textContent = "Sent";
            }, 400);
            setTimeout(function () {
               btn.textContent = "Send Message";
               const text = document.querySelector('.form__body-textarea');
               text.classList.add('_text');
               setTimeout(function () {
                  text.value = "";
               }, 400);
               setTimeout(function () {
                  text.classList.remove('_text')
               }, 800);
            }, 1200);
         }
      } else {
         if (!btn.classList.contains('_err')) {
            btn.classList.add('_err')
            setTimeout(function () {
               btn.classList.remove('_err')
            }, 1000);
            setTimeout(function () {
               btn.textContent = "Error";
            }, 400);
            setTimeout(function () {
               btn.textContent = "Send Message"
            }, 1200);
         }
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req')
      for (let index = 0; index < formReq.length; index++) {
         const el = formReq[index];
         formRemoveError(el)

         if (el.classList.contains('_email')) {
            if (emailTest(el)) {
               formAddError(el);
               error++
            }
         } else {
            if (el.value === '') {
               formAddError(el);
               error++
            }
         }
      }
      return error;
   }

   function formAddError(el) {
      el.classList.add('_error')
      el.parentNode.classList.add('_error')
   }
   function formRemoveError(el) {
      el.classList.remove('_error')
      el.parentNode.classList.remove('_error')
   }

   function emailTest(el) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(el.value);
   }

});

// Page Navigation and underline the menu items =======================



const items = document.querySelector('.nav__items');
const allA = items.querySelectorAll('a').forEach((link) => {
   let href = link.getAttribute('href').split('#')[1];
   link.addEventListener("click", function (e) {
      e.preventDefault();
      let el = document.getElementById(`${href}`)
      el.scrollIntoView({ behavior: 'smooth' })
   })
})

const observ = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         const allA = items.querySelectorAll('a').forEach((link) => {
            let href = link.getAttribute('href').split('#')[1];
            link.parentNode.classList.remove('_underline');

            if ((entry.target.id == href)) {
               link.parentNode.classList.add('_underline')
            }
         })
      }
   });
}, {
   threshold: [0.25]
})

document.querySelectorAll('section').forEach((section) => {
   observ.observe(section)
});

const animation = new IntersectionObserver((entries) => {
   console.log(entries);
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         console.log(entry);
         entry.target.classList.remove('anim')
         animation.unobserve(entry.target)
         console.log(entry);
      }
   });
}, {
   threshold: [0.25]
})

document.querySelectorAll('.title__info, .title__title, .header, .alex__text, .alex__social-link, .alex__img, .alex__images, .specialized__column, .work').forEach((addAnim) =>{
   animation.observe(addAnim);
});
document.querySelectorAll('.works__controls, .exp__company, .company-body, .blog-post__items, .body-clients__items, .skills-myway__items, .skills-static, .contact-form__items, .form__forms').forEach((addAnim) =>{
   animation.observe(addAnim);
});