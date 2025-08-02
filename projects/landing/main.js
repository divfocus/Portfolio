document.addEventListener('DOMContentLoaded', () => { 
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  // Открытие/закрытие по клику на бургер
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
});