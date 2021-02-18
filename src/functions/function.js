/* eslint-disable linebreak-style */
/**
 * contains helper functions
 */
/**
 * convert the temperature in kelvin to celcius
 * @param {*} temperature is the temperature passed to convert
 */
export const kelvinToCelsius = (temperature) => Math.ceil(temperature - 273);

/**
 * convert the timestamp into local time
 * @param {*} time is the timestamp  passed to convert
 */
export const convertTimestamp = (time) => new Date(time * 1000).toLocaleTimeString().slice(0, 4);

export const getWeatherImage = (image) => {
  const imageUrl = `https://openweathermap.org/img/w/${image}.png`;
  return imageUrl;
};
