let header = document.querySelector('.header');
let toggleBtn = document.querySelector('.nav-toggle-btn');
let open = document.querySelector('.open');




toggleBtn.addEventListener('click',toggleFunciton = () => {
    header.classList.toggle('active');
});