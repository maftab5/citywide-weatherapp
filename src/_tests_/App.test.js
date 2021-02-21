/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
import App from '../components/App';
// import { useEffect } from 'react';

// eslint-disable-next-line no-undef
test('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/react-in-jsx-scope
  ReactDOM.render(<App />, div);
});
