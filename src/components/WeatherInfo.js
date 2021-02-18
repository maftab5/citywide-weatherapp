/* eslint-disable react/forbid-prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import { kelvinToCelsius, convertTimestamp, getWeatherImage } from '../functions/function';
/**
 * Component to display
 * the weather information
 */

const WeatherInfoDiv = ({ weatherInfo }) => (
  <>
    <div className="flex-container">
      {weatherInfo.map(({
        name, main, sys, weather, wind,
      }, key) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="weather-item" key={key}>
          <div className="card">
            <section className="temp_section">
              <p className="main_temperature">
                {' '}
                {kelvinToCelsius(main.temp)}&deg;
              </p>
              <h3 className="location">
                {name}, {sys.country}
              </h3>
            </section>

            <section className="card-body">
              <img
                src={getWeatherImage(weather[0].icon)}
                alt="weather icon"
                height="60"
                width="30"
              />

              <div className="card-text">
                {kelvinToCelsius(main.temp_max)}&deg;
                |
                {kelvinToCelsius(main.temp_min)}&deg;
                <p>
                  Feels like: {kelvinToCelsius(main.feels_like)}&deg;
                </p>
                <p> Wind: {wind.speed} mph </p>
                <p> Sunrise: {convertTimestamp((sys.sunrise))} AM </p>
                <p> Sunset: {convertTimestamp(sys.sunset)} PM </p>
              </div>
            </section>
          </div>
        </div>

      ))}
    </div>
  </>
);
WeatherInfoDiv.propTypes = {
  weatherInfo: PropTypes.array.isRequired,
};
export default WeatherInfoDiv;
