import { SELECTOR } from './constants.js';

export const commonHeader = `
<header>
<h1>우테코 크루와 팀 매칭 관리 보드</h1>
<nav>
    <ul>
    <li>
        <button id=${SELECTOR.crewTab}>크루 관리</button>
    </li>
    <li>
        <button id=${SELECTOR.teamTab}>팀 매칭 관리</button>
    </li>
    </ul>
</nav>
</header>
<main id=${SELECTOR.container}>
</main>
`;

export const crewCourseSection = `
<section>
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
    <input type="radio" name=${SELECTOR.crewRadioName} value="frontend" id=${SELECTOR.radioFrontCourse} />
    <label for="frontend">프론트엔드</label>
    <input type="radio" name=${SELECTOR.crewRadioName} value="backend" id=${SELECTOR.radioBackCourse} />
    <label for="backend">백엔드</label>
    </div>
</section>
<section id=${SELECTOR.crewManageSection}>
</section>
`;

export const crewManageSection = course => `
<section>
    <h3>${course} 크루 관리</h3>
    <form>
    <label>크루 이름</label>
    <input type="text" id=${SELECTOR.crewNameInput} />
    <button id=${SELECTOR.crewAddButton}>확인</button>
    </form>
</section>
<section>
    <h3>${course} 크루 목록</h3>
    <table border="1" id=${SELECTOR.crewTable}>
    <thead>
        <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
        </tr>
    </thead>
    <tbody></tbody>
    </table>
</section>
`;

export const crewTableHeader = `
<thead>
    <tr>
    <th></th>
    <th>크루</th>
    <th>관리</th>
    </tr>
</thead>
<tbody></tbody>
`;
export const crewTableRow = (index, crew) => `
<tr>
    <td>${index}</td>
    <td>${crew}</td>
    <td>
        <button id=${SELECTOR.crewDeleteButton}>삭제</button>
    </td>
</tr>
`;
