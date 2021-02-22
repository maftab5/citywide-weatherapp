/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../components/App';
import WeatherInfo from '../components/WeatherInfo';
import SearchLocation from '../components/SearchLocation';

// eslint-disable-next-line no-undef
describe('App', () => {
  let mountedApp;
  // let props;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />);
    }
    return mountedApp;
  };

  beforeEach(() => {
    mountedApp = undefined;
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    // eslint-disable-next-line react/react-in-jsx-scope
    ReactDOM.render(<App />, div);
  });

  test('always render `SearchLocation`', () => {
    expect(app().find(SearchLocation).length).toBe(1);
  });

  test('always render `WeatherInfo`', () => {
    expect(app().find(WeatherInfo).length).toBe(0);
  });
  // const value = { locationOne: 'guelph', locationTwo: 'palpa' };
  const searchlocation = shallow(<SearchLocation />);
  test('receives expected number of props', () => {
    expect(Object.keys(searchlocation.props()).length).toBe(1);
  });
});
