'use strict';

const crossButton = document.querySelector('.nav__button');
const sideMenu = document.querySelector('.nav__list');

crossButton.addEventListener('click', () => {
    crossButton.classList.toggle('active');
    sideMenu.classList.toggle('active');
})