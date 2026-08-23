const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuButton && navigationLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigationLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigationLinks.addEventListener('click', () => {
    navigationLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
