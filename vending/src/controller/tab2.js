import { $ } from './utils.js';

const addProduct = () => {
  event.preventDefault();
  const product = $('product-name-input').value;
  const price = $('product-price-input').value;
  const quantity = $('product-quantity-input').value;
  
};

export const addTab2EventListener = view => {
    const table = document.querySelector('tbody');
    console.log(table)
};
