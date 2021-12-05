const Station = name => {
  this.name = name;
};
Station.isValidStationName = stationName => {
  const allStation = JSON.parse(localStorage.getItem('stations'));

  return !allStation.includes(stationName);
};

export default Station;
