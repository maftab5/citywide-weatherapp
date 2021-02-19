/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import React from 'react';
import { mount } from 'enzyme';
import WeatherInfo from '../components/WeatherInfo';

test('weather information test', () => {
  const data = [{
    name: 'toronto',
    main: {
      temp: '10',
      temp_max: '20',
      temp_min: '-20',
    },
    sys: {
      country: 'CA',
    },
    weather: ['o17'],
    wind: {
      speed: '30',
    },

  },
  {
    name: 'nepal',
    main: {
      temp: '10',
      temp_max: '20',
      temp_min: '-20',
    },
    sys: {
      country: 'NP',
    },
    weather: ['o17'],
    wind: {
      speed: '30',
    },

  },
];

const wrapper = mount(<WeatherInfo weatherInfo={data} />);
const nameField = wrapper.find('.location1');
expect(nameField.text()).toBe('nepal, NP');
});
