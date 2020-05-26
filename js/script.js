const burger = document.querySelector('.fa-bars');
const menu = document.querySelector('.m-menu');
const closeBtn = document.querySelector('.close');

const showMenu = () => {
    menu.classList.add('active');
};

const hideMenu = () => {
    menu.classList.remove('active');
};

burger.addEventListener('click', showMenu);
closeBtn.addEventListener('click', hideMenu);