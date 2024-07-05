document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu-items');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});

// Change Navbar background on scroll

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 30) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
