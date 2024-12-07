const convertToCelsius = function(farenTemp) {
  let celsiusTemp = Math.round(((farenTemp - 32) * (5 / 9)) * 10) / 10;
  return celsiusTemp;
};

const convertToFahrenheit = function(celsiusTemp) {
  let farenTemp = Math.round((celsiusTemp * 1.8 + 32) * 10) / 10;
  return farenTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
