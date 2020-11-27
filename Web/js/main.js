const btn = document.querySelector('#humberger');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')

});