import { SELECTOR } from './constants.js';

export const template = `
<div id="container">
<h1>지하철 길찾기</h1>
<div>
<b>출발역</b><input type="text" id=${SELECTOR.departure} placeholder="출발역"/> <br/>
<b>도착역</b><input type="text" id=${SELECTOR.arrival} placeholder="도착역"/></div>
<input type="radio" name=${SELECTOR.radio} value="distance" checked/>최단거리 <input type="radio" name=${SELECTOR.radio} value="time"/>최소시간<br/>
<button id=${SELECTOR.search}>길 찾기</button>
<h1>결과</h1>
<div id="result"></div>
</div>
`;

export const resultComponent = (result, info) => `
<h2>${info.type}</h2>
<table border="1">
<tbody>
<th>총 거리</th>
<th>총 소요 시간</th>
<tr>
    <td>${info.dist}km</td>
    <td>${info.time}분</td>
</tr>
<tr><td colspan="2">${result}</td></tr>
</tbody>
</table>
`;
