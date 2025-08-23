//-------------------------- Slider-----------------------------------

let slideIndex = 0;
  const card = document.querySelector('.review-card');

  document.querySelector('.arrow-left').addEventListener('click', () => {
    card.style.transform = 'translateX(20px)';
    setTimeout(() => card.style.transform = 'translateX(0)', 300);
  });

  document.querySelector('.arrow-right').addEventListener('click', () => {
    card.style.transform = 'translateX(-20px)';
    setTimeout(() => card.style.transform = 'translateX(0)', 300);
  });

  //-------------------------- Modal window-----------------------------------

  document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault(); // Preventing real sending
    const overlay = document.querySelector('.modal-overlay');
    const form = this;
    overlay.style.display = 'flex';
    form.reset();
  });
  
  document.querySelector('.modal-close').addEventListener('click', function() {
    document.querySelector('.modal-overlay').style.display = 'none';
  });

  //-------------------------- Burger menu -----------------------------------

  document.addEventListener('DOMContentLoaded', () => { 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mobile-nav');
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('open');
    });
  
    const navLinks = document.querySelectorAll('.mobile-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  });

  //-------------------------- Header scrolling -----------------------------------

  let lastScroll = 0;
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
  
    if (currentScroll > lastScroll) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  
    lastScroll = currentScroll;
  });