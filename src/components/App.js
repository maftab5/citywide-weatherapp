/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import SearchLocation from './SearchLocation';
import WeatherInfo from './WeatherInfo';

const App = () => {
  /**
   * defining the state properties
   */
  const [state, setState] = useState({
    userInputValue: {
      locationOne: 'guelph',
      locationTwo: 'palpa',
    },
    userInputCoordintes: {
      coordinatesOne: {
        lat1: '',
        lng1: '',
      },
      coordinatesTwo: {
        lat2: '',
        lng2: '',
      },
    },
    weatherInfo: {
      locationOneInfo: [],
      locationTwoInfo: [],
    },
    errors: '',
    loading: true,

  });

  const {
    userInputValue, weatherInfo, loading, errors,
  } = state;

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationApiKey = process.env.REACT_APP_GEOLOCATION_API_KEY;

  const latLongURL = `https://api.opencagedata.com/geocode/v1/json?q=${userInputValue.locationOne.toString()}&key=${locationApiKey}`;
  const latLongURL2 = `https://api.opencagedata.com/geocode/v1/json?q=${userInputValue.locationTwo.toString()}&key=${locationApiKey}`;

  /**
   * calling the funtion to load the
   * values from the state by calling the
   * fetchWeatherInfo function
   */
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchLatLong();
  }, []);

  const fetchLatLong = async () => {
    try {
      const [response1, response2] = await Promise.all([fetch(latLongURL), fetch(latLongURL2)]);
      // eslint-disable-next-line max-len
      const [locationInfo1, locationInfo2] = await Promise.all([response1.json(), response2.json()]);

      const { lat: lat1, lng: lng1 } = locationInfo1.results[0].geometry;
      const { lat: lat2, lng: lng2 } = locationInfo2.results[0].geometry;
      setState((prevState) => ({
        ...prevState,
        userInputCoordintes: {
          ...prevState.userInputCoordintes,
          coordinatesOne: {
            ...prevState.coordinatesOne,
            lat1,
            lng1,
          },
          coordinatesTwo: {
            ...prevState.coordinatesTwo,
            lat2,
            lng2,
          },
        },
        errors: '',
      }));
      // eslint-disable-next-line no-use-before-define
      fetchWeatherInfo(lat1, lng1, lat2, lng2);
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        errors: e,
      }));
      // eslint-disable-next-line no-console
      console.log(`Error messaage :${e}`);
    }
  };

  /**
   * async function to fetch the data
   * using fetch function and
   * store the values in the state
   */
  const fetchWeatherInfo = async (lat1, lng1, lat2, lng2) => {
    const locationOneWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lng1}&appid=${apiKey}`;
    const locationTwoWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat2}&lon=${lng2}&appid=${apiKey}`;
    try {
      // eslint-disable-next-line max-len
      const [response1, response2] = await Promise.all([fetch(locationOneWeatherURL), fetch(locationTwoWeatherURL)]);
      // eslint-disable-next-line max-len
      const [locationOneInfo, locationTwoInfo] = await Promise.all([response1.json(), response2.json()]);

      setState((prevState) => ({
        ...prevState,
        weatherInfo: {
          ...prevState.weatherInfo,
          locationOneInfo,
          locationTwoInfo,
        },
        error: '',
        loading: false,
      }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        errors: e,
      }));
    }
  };
  // eslint-disable-next-line no-console
  console.log(weatherInfo.locationTwoInfo);

  /**
   * To capture the input value
   * change the state of userInputValue
   * @param {*} e is the synthetic event
   */
  const handleInputChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      userInputValue: {
        ...prevState.userInputValue,
        [name]: [value],
      },
    }));
  };

  const allLocationInfo = [weatherInfo.locationOneInfo, weatherInfo.locationTwoInfo];
  // eslint-disable-next-line no-console
  console.log(allLocationInfo);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <SearchLocation value={userInputValue} change={handleInputChange} submit={fetchLatLong} />
      {
        loading ? '' : <WeatherInfo weatherInfo={allLocationInfo} error={errors} />
      }

    </>
  );
};

export default App;
