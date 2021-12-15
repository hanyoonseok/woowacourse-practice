export const SELECTOR = {
  addMenu: 'product-add-menu',
  vendingMenu: 'vending-machine-manage-menu',
  purchaseMenu: 'product-purchase-menu',
  container: 'container',

  productNameInput: 'product-name-input',
  productPriceInput: 'product-price-input',
  productQuantityInput: 'product-quantity-input',
  productAddButon: 'product-add-button',
  productItem: 'product-manage-item',
  productName: 'product-manage-name',
  productPrice: 'product-manage-price',
  productQuantity: 'product-manage-quantity',

  vendingChargeInput: 'vending-machine-charge-input',
  vendingChargeButton: 'vending-machine-charge-button',
  vendingChargeAmount: 'vending-machine-charge-amount',
  vendingCoin500Quantity: 'vending-machine-coin-500-quantity',
  vendingCoin100Quantity: 'vending-machine-coin-100-quantity',
  vendingCoin50Quantity: 'vending-machine-coin-50-quantity',
  vendingCoin10Quantity: 'vending-machine-coin-10-quantity',

  chargeInput: 'charge-input',
  chargeButton: 'charge-button',
  chargeAmount: 'charge-amount',
  returnButton: 'coin-return-button',
  coin500Quantity: 'coin-500-quantity',
  coin100Quantity: 'coin-100-quantity',
  coin50Quantity: 'coin-50-quantity',
  coin10Quantity: 'coin-10-quantity',
  purchaseItem: 'product-purchase-item',
  purchaseButton: 'purchase-button',
  purchaseName: 'product-purchase-name',
  purchasePrice: 'product-purchase-price',
  purchaseQuantity: 'product-purchase-quantity',

  datasetName: 'data-product-name',
  datasetPrice: 'data-product-price',
  datasetQuantity: 'data-product-quantity',
};

export const KEY = {
  product: 'products',
  vending: 'vendingMachine',
  charge: 'userCharge',
};

export const ALERT_MESSAGE = {
  isBlankExist: '공백을 제거해주세요',
  isNotPositive: '1이상의 양수를 작성해주세요',
  isNotMultipleOf10: '10의 배수를 작성해주세요',
  isNotBiggerThan100: '100원 이상 작성해주세요',
};

export const COIN_ARRAY = [500, 100, 50, 10];

export const VENDING_COIN_X_QUANTITY = coin => `vending-machine-coin-${coin}-quantity`;

export const COIN_X_QUANTITY = coin => `coin-${coin}-quantity`;