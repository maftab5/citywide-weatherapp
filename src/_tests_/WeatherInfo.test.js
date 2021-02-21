/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/**
 * Test the weatherInfo component display data according
 * to data sent
 */
import React from 'react';
import { mount } from 'enzyme';
import WeatherInfo from '../components/WeatherInfo';

describe('weather information test', () => {
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
const error = '';
const wrapper = mount(<WeatherInfo weatherInfo={data} error={error} />);
const nameField = wrapper.find('.location1');
test('successful if location is same', () => {
  expect(nameField.text()).toBe('nepal, NP');
});
test('fails if the text is not same', () => {
  expect(nameField.text()).toBe('korea, NP');
});
});
