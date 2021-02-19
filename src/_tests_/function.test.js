/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// import {render,fireEvent,cleanup} from '@testing-library/react';
import { kelvinToCelsius, convertTimestamp } from '../functions/function';

describe('common functions tests ', () => {
  test('kelvin to celcius function', () => {
    const value = kelvinToCelsius(250);
    expect(value).toBe(-23);
  });

  test('convert timestamp to local time', () => {
    const value = convertTimestamp(1613694965);
    expect(value).toBe('7:36');
  });
});
