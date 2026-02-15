// Script for burger menu
document.addEventListener('DOMContentLoaded', function() {
  const openMenuBtn = document.querySelector('.burger-menu-btn');
  const closeMenuBtn = document.querySelector('.menu-close-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const body = document.body;

  // Function to open burger menu
  function openMenu() {
    burgerMenu.classList.add('is-open');
    body.style.overflow = 'hidden';
  }

  // Function to close burger menu
  function closeMenu() {
    burgerMenu.classList.remove('is-open');
    body.style.overflow = '';
  }

  // Opening the burger menu
  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', function() {
      openMenu();
    });
  }

  // Closing the burger menu
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', function() {
      closeMenu();
    });
  }

  // Closing when pressing Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Optional: Close menu when clicking on navigation links
  const menuLinks = document.querySelectorAll('.nav-burger-menu-link');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
});