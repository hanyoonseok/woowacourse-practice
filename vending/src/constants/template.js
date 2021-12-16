import { SELECTOR } from './constants.js';

export const header = `
<h1>자판기</h1>
<div>
<button id=${SELECTOR.addMenu}>상품 관리</button>
<button id=${SELECTOR.vendingMenu}>잔돈 충전</button>
<button id=${SELECTOR.purchaseMenu}>상품 구매</button>
</div>
<div id=${SELECTOR.container}></div>
`;

export const addTab = `
<h2>상품 추가하기</h2>
<input type="text" id=${SELECTOR.productNameInput} placeholder="상품명"/>
<input type="number" id=${SELECTOR.productPriceInput} placeholder="가격"/>
<input type="number" id=${SELECTOR.productQuantityInput} placeholder="수량"/>
<button id=${SELECTOR.productAddButon}>추가하기</button>

<h2>상품 현황</h2>
<table border="1">
<tbody>
<th>상품명</th>
<th>가격</th>
<th>수량</th>
</tbody>
</table>
`;

export const vendingTab = `
<h2>자판기 동전 충전하기</h2>
<input type="number" id=${SELECTOR.vendingChargePrice} placeholder="동전 단위"/>
<input type="number" id=${SELECTOR.vendingChargeQuantity} placeholder="개수"/>
<button id=${SELECTOR.vendingChargeButton}>충전하기</button>
<div>보유 금액: <span id=${SELECTOR.vendingChargeAmount}></span></div>

<h2>자판기가 보유한 동전</h2>
<table border="1">
<tbody>
</tbody>
</table>
`;

export const purchaseTab = `
<h2>금액 투입</h2>
<input type="number" id=${SELECTOR.chargeInput} placeholder="투입할 금액"/>
<button id=${SELECTOR.chargeButton}>투입하기</button>
<div>투입한 금액: <span id=${SELECTOR.chargeAmount}></span></div>

<h2>구매할 수 있는 상품 현황</h2>
<table border="1">
<tbody>
</tbody>
</table>

<h2>잔돈</h2>
<button id=${SELECTOR.returnButton}>반환하기</button>
<table border="1">
<tbody>
</tbody>
</table>
`;

export const productAddTableRow = product => `
<tr class=${SELECTOR.productItem}>
    <td class=${SELECTOR.productName}>${product.name}</td>
    <td class=${SELECTOR.productPrice}>${product.price}</td>
    <td class=${SELECTOR.productQuantity}>${product.quantity}</td>
</tr>
`;

export const purchaseTableHeader = `
<th>상품명</th>
<th>가격</th>
<th>수량</th>
<th>구매</th>
`;

export const purchaseTableRow = item => `
<tr class=${SELECTOR.purchaseItem}>
    <td class=${SELECTOR.purchaseName} data-product-name=${item.name}>${item.name}</td>
    <td class=${SELECTOR.purchasePrice} data-product-price=${item.price}>${item.price}</td>
    <td class=${SELECTOR.purchaseQuantity} data-product-quantity=${item.quantity}>${item.quantity}</td>
    <td><button class=${SELECTOR.purchaseButton} data-target=${item.name}>구매하기</button></td>
</tr>
`;

export const vendingTableHeader = `
<th>동전</th>
<th>개수</th>
`;
export const vendingTableRow = coin => `
<tr>
    <td>${coin.price}원</td>
    <td>${coin.quantity}개</td>
</tr>
`;

export const purchaseReturnTableRow = coin => `
<tr>
    <td class=return-coin-${coin.price}-price>${coin.price}원</td>
    <td id=return-coin-${coin.price}-quantity></td>
</tr>
`;
