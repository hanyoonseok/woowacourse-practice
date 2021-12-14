import { SELECTOR } from './constants.js';

export const header = `
<div>
<button id=${SELECTOR.stationMenu}>역관리</button>
<button id=${SELECTOR.lineMenu}>노선 관리</button>
<button id=${SELECTOR.sectionMenu}>구간 관리</button>
<button id=${SELECTOR.printMenu}>지하철 노선도 출력</button>
</div>
<div id="container"></div>
`;

export const stationTab = `
<h2>역 이름</h2>
<input type="text" id=${SELECTOR.stationNameInput} placeholder="역 이름"/><button id=${SELECTOR.stationAddButton}>추가하기</button>

<h1>지하철 역 목록</h1>
<table border="1">
<tbody>
</tbody>
</table>
`;

export const lineTab = `
<h2>노선 이름</h2>
<input type="text" id=${SELECTOR.lineNameInput} placeholder="노선 이름"/>

<div><b>상행 종점</b> <select id=${SELECTOR.lineStartSelect}></select><br/>
<b>하행 종점</b> <select id=${SELECTOR.lineEndSelect}></select></div>
<button id=${SELECTOR.lineAddButton}>노선 추가</button>

<h1>지하철 노선 목록</h1>
<table border="1">
<tbody>
</tbody>
</table>
`;

export const sectionTab = `
<h2>구간을 수정할 노선을 선택해주세요.</h2>
<div id="section-lines"></div>
<div id="section-line-contents"></div>
`;

export const printTab = `

`

export const stationTableHeader = `
<th>역이름</th>
<th>설정</th>
`;

export const stationTableRow = station => `
<tr>
    <td>${station}</td>
    <td><button class=${SELECTOR.stationDeleteButton} data-station=${station}>삭제</button></td>
</tr>
`;

export const lineTableHeader = `
<th>노선이름</th>
<th>상행 종점역</th>
<th>하행 종점역</th>
<th>설정</th>
`;

export const lineTableRow = line => `
<tr>
    <td>${line.name}</td>
    <td>${line.stations[0]}</td>
    <td>${line.stations[line.stations.length - 1]}</td>
    <td><button class=${SELECTOR.lineDeleteButton} data-line=${line.name}>삭제</button></td>
</tr>
`;

export const sectionLineContents = line => `
<h2>${line.name}관리</h2>
<h3>구간 등록<h3>
<select id=${SELECTOR.sectionStationSelect}></select><input type="number" id=${SELECTOR.sectionOrderInput} placeholder="순서"/>
<button id=${SELECTOR.sectionAddButton} data-line=${line.name}>등록</button>
<table border="1">
<tbody>
</tbody>
</table>
`;

export const sectionTableHeader = `
<th>순서</th>
<th>이름</th>
<th>설정</th>
`

export const sectionTableRow = (station, index) => `
<tr>
    <td>${index}</td>
    <td>${station}</td>
    <td><button class=${SELECTOR.sectionDeleteButton} data-station=${station}>노선에서 제거</button></td>
</tr>
`

export const printTitle = line => `
<h2>${line.name}</h2>
<ul></ul>
`