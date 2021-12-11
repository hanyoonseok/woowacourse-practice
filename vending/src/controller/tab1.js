import { $ , appendChilds} from './utils.js';

const addProduct = (view,event) => {
    event.preventDefault();
  const product = $('product-name-input').value;
  const price = $('product-price-input').value;
  const quantity = $('product-quantity-input').value;
  const table = document.querySelector('tbody');
  view.addTableRow(table, [product, price, quantity])
};

export const addTab1EventListener = view => {
  $('product-add-button').addEventListener('click', event => addProduct(view, event));
};
