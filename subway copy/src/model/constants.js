export const MENU = name => {
  const Array = [
    {
      name: 'station',
      id: 'station-manager-button',
      text: '1. 역관리',
      tableHeader: ['역이름', '설정'],
      NameInput: 'station-name-input',
      AddButton: 'station-add-button',
      DeleteButton: 'station-delete-button',
    },
    {
      name: 'line',
      id: 'line-manager-button',
      text: '2. 노선 관리',
      tableHeader: ['노선이름', '상행 종점역', '하행 종점역', '설정'],
      NameInput: 'line-name-input',
      StartSelect: 'line-start-station-selector',
      EndSelect: 'line-end-station-selector',
      AddButton: 'line-add-button',
      DeleteButton: 'line-delete-button',
    },
    {
      name: 'section',
      id: 'section-manager-button',
      text: '3. 구간 관리',
      tableHeader: ['순서', '이름', '설정'],
      LineMenuButton: 'section-line-menu-button',
      StationSelect: 'section-station-selector',
      OrderInput: 'section-order-input',
      AddButton: 'section-add-button',
      DeleteButton: 'section-delete-button',
    },
    {
      name: 'mapPrint',
      id: 'map-print-manager-button',
      text: '4. 지하철 노선도 출력',
    },
  ];

  return Array.find(e => e.name === name);
};
