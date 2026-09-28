const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
});
