/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import App from './components/App';

// eslint-disable-next-line no-undef
test('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/react-in-jsx-scope
  ReactDOM.render(<App />, div);
});
