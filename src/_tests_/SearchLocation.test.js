/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import SearchLocation from '../components/SearchLocation';
import React from 'react';
import { mount } from 'enzyme';

test('Search location test', () => {
  const values = { locationOne: 'delhi', locationTwo: 'halifax' };
  const change = jest.fn();
  const submit = jest.fn();
  const handleClick = jest.spyOn(React, 'useState');
  handleClick.mockImplementation((state) => [state, setState]);
  const wrapper = mount(<SearchLocation value={values} change={change} submit={submit} />);
  const button = wrapper.find('.btn-success');
  button.simulate('click');
  expect(change).toBeTruthy();
});
