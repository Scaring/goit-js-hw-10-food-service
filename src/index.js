'use strict';
import '../src/styles.css';
import markup from './scripts/rander-markup';

//rander menu
const menu = document.querySelector('.js-menu');
menu.insertAdjacentHTML('beforeend', markup);

//set page theme
const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.switch__input');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const setDarkTheme = () => {
  body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
  body.classList.add(Theme.DARK);
};
const setLightTheme = () => {
  body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
  body.classList.add(Theme.LIGHT);
};

//change theme by click
themeSwitcher.addEventListener('click', e => {
  if (e.target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

//check theme after reloading page
if (localStorage.getItem('theme') === Theme.DARK) {
  body.classList.add(Theme.DARK);
  themeSwitcher.setAttribute('checked', 'checked');
}
