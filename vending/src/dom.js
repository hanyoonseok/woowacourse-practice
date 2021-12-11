export const tabMenus = `
  <div>
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu" >잔돈 충전</button>
    <button id="product-purchase-menu" style=>상품 구매</button>
  </div>
  <div id="container"></div>
`;
export const tab1 = `
<div class="tab1">
  <h2>상품 추가하기</h2>
  <form>
      <input type="text" id="product-name-input" placeholder="상품명" />
      <input type="number" id="product-price-input" placeholder="가격" />
      <input type="number" id="product-quantity-input" placeholder="수량"
      />
      <input type="submit" id="product-add-button" value="추가하기"></input>
  </form>
  <h2>상품 현황</h2>
  <table border="1">
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
  </table>
</div>
`;
export const tab2 = `
<div class="tab2">
    <h2>자판기 동전 충전하기</h2>
    <form>
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"
        />
        <input type="submit" id="vending-machine-charge-button" value="충전하기"></input>
    </form>
    <br>
    <p>보유 금액: 
    <span id="vending-machine-charge-amount">0</span>원
    </p>
    <h2>자판기가 보유한 동전</h2>
    <table border="1">
      <th>동전</th>
      <th>개수</th>
      <tr>
          <th>500원</th>
          <td id="vending-machine-coin-500-quantity"></td>
      </tr>
      <tr>
          <th>100원</th>
          <td id="vending-machine-coin-100-quantity"></td>
      </tr>
      <tr>
          <th>50원</th>
          <td id="vending-machine-coin-50-quantity"></td>
      </tr>
      <tr>
          <th>10원</th>
          <td id="vending-machine-coin-10-quantity"></td>
      </tr>
    </table>
</div>
`;
