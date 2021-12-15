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
</tbody>
</table>
`;

export const vendingTab = `
<h2자판기 동전 충전하기</h2>
<input type="number" id=${SELECTOR.vendingChargeInput} placeholder="자판기가 보유할 금액"/>
<button id=${SELECTOR.vendingChargeButton}>충전하기</button>
<div>보유 금액: <span id=${SELECTOR.vendingChargeAmount}></span></div>

<h2>자판기가 보유한 동전</h2>
<table border="1">
<tbody>
<th>동전</th>
<th>개수</th>
<tr>
<td>500원</td>
<td id=${SELECTOR.vendingCoin500Quantity}></td>
<td>100원</td>
<td id=${SELECTOR.vendingCoin100Quantity}></td>
<td>50원</td>
<td id=${SELECTOR.vendingCoin50Quantity}></td>
<td>10원</td>
<td id=${SELECTOR.vendingCoin10Quantity}></td>
</tr>
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
    <th>동전</th>
    <th>개수</th>
    <tr>
        <td>500원</td>
        <td id=${SELECTOR.coin500Quantity}></td>
    </tr>
    <tr>
        <td>100원</td>
        <td id=${SELECTOR.coin100Quantity}></td>
    </tr>
    <tr>
        <td>50원</td>
        <td id=${SELECTOR.coin50Quantity}></td>
    </tr>
    <tr>
        <td>10원</td>
        <td id=${SELECTOR.coin10Quantity}></td>
    </tr>
</tbody>
</table>
`;
