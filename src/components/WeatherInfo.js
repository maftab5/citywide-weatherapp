/* eslint-disable linebreak-style */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */

/**
 * WeatherInfo component display the
 * weather information data
 *  @param {*} weatherInfo is the array of weather info
 * from App component
 */
import PropTypes from 'prop-types';
import { kelvinToCelsius, convertTimestamp, getWeatherImage } from '../functions/function';
import NotFound from './NotFound';
/**
 * Component to display
 * the weather information
 */

const WeatherInfo = ({ weatherInfo, error }) => (
  <>

    <div className="flex-container">
      { error ? <NotFound /> : (
        weatherInfo.map(({
          name, main, sys, weather, wind,
        }, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <div className="weather-item" key={index}>
            { name ? (
              <div className="card">
                <section className="temp_section">
                  <p className="main_temperature">
                    {kelvinToCelsius(main.temp)}&deg;
                    <img
                      src={getWeatherImage(weather[0].icon)}
                      alt="weather icon"
                      height="75"
                      width="38"
                    />
                  </p>
                  <h3 className={`location${index} `}>
                    {name}, {sys.country}
                  </h3>
                </section>

                <section className="card-body">

                  <div className="card-text">
                    <p> {kelvinToCelsius(main.temp_max)}&deg;
                      |
                      {kelvinToCelsius(main.temp_min)}&deg;
                    </p>
                    <p>
                      Feels like: {kelvinToCelsius(main.feels_like)}&deg;
                    </p>
                    <p> Wind: {wind.speed} mph </p>
                    <p> Sunrise: {convertTimestamp((sys.sunrise))} AM </p>
                    <p> Sunset: {convertTimestamp(sys.sunset)} PM </p>
                  </div>
                </section>
              </div>
            ) : <NotFound />};
          </div>

        )))}
    </div>
  </>
);
WeatherInfo.propTypes = {
  weatherInfo: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
};
export default WeatherInfo;
