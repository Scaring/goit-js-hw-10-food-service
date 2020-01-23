import products from '../src/menu.json';
import foodItemTemplate from '../src/templates/food-template.hbs';
import '../src/styles.css';

const menu = document.querySelector('.js-menu');
const themeSwitcher = document.querySelector('.switch__input');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function buildMenu(products) {
  const markup = products.map(product => foodItemTemplate(product)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(products);

if (localStorage.getItem('theme') === Theme.DARK) {
  body.classList.add(Theme.DARK);
  themeSwitcher.setAttribute('checked', 'checked');
}

themeSwitcher.addEventListener('click', e => {
  if (e.target.checked) {
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
  }
});
