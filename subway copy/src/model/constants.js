export const SELECTOR = {
  stationNameInput: 'station-name-input',
  stationAddButton: 'station-add-button',
  stationDeleteButton: 'station-delete-button',

  lineNameInput: 'line-name-input',
  lineStartSelect: 'line-start-station-selector',
  lineEndSelect: 'line-end-station-selector',
  lineAddButton: 'line-add-button',
  lineDeleteButton: 'line-delete-button',

  sectionLineMenuButton: 'section-line-menu-button',
  sectionStationSelect: 'section-station-selector',
  sectionOrderInput: 'section-order-input',
  sectionAddButton: 'section-add-button',
  sectionDeleteButton: 'section-delete-button',
};

export const MENU_BUTTON = name => {
  const Array = [
    {
      name: 'station',
      id: 'station-manager-button',
      text: '1. 역관리',
    },
    {
      name: 'line',
      id: 'line-manager-button',
      text: '2. 노선 관리',
    },
    {
      name: 'section',
      id: 'section-manager-button',
      text: '3. 구간 관리',
    },
    {
      name: 'mapPrint',
      id: 'map-print-manager-button',
      text: '4. 지하철 노선도 출력',
    },
  ];

  return Array.find(e => e.name === name);
};
