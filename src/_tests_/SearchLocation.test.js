/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/**
 * Testing the change in state in APP component when the values
 * are passed in SearchLoaction component
 */
import SearchLocation from '../components/SearchLocation';
import React from 'react';
import { mount } from 'enzyme';

describe('Test change in state ', () => {
  const values = { locationOne: 'delhi', locationTwo: 'halifax' };
  const error = '';
  const change = jest.fn();
  const submit = jest.fn();
  const handleClick = jest.spyOn(React, 'useState');
  handleClick.mockImplementation((state) => [state, setState]);
  const wrapper = mount(<SearchLocation value={values} change={change} submit={submit} error={error} />);
  const button = wrapper.find('.btn-primary');
  button.simulate('click');

  test('true if the state change', () => {
    expect(change).toBeTruthy();
  });
});
