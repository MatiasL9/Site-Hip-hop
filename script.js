
// =============================
// MENU MOBILE
// =============================

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

  const isOpen = navLinks.classList.toggle('active');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu' : 'Abrir menu'
  );

  menuToggle.textContent = isOpen ? '✕' : '☰';

});

// =============================
// FECHAR MENU AO CLICAR NO LINK
// =============================

document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', () => {

    navLinks.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');

    menuToggle.textContent = '☰';

  });

});

// =============================
// EFEITO DE SCROLL NO MENU
// =============================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if (window.scrollY > 50) {
    header.style.background = 'rgba(5, 5, 5, 0.99)';
  } else {
    header.style.background = 'rgba(9, 9, 9, 0.96)';
  }

});
