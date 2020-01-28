'use strict';
import products from '../menu.json';
import foodItemTemplate from '../templates/food-template.hbs';

const buildMenu = function buildMenu(arr) {
  return products.map(arr => foodItemTemplate(arr)).join('');
};

const markup = buildMenu(products);

export default markup;
