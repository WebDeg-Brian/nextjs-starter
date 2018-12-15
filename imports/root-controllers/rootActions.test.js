import configureStore from 'redux-mock-store';
import {
  updateViewportDimensions,
  getBrowserInfo,
  getEngineInfo,
  getMobileInfo,
  getOSInfo,
} from './rootActions';

const store = configureStore()();

describe('Check if actions return correct payloads', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('updateViewportDimensions', () => {
    const newWidth = 1024;
    const newHeight = 512;

    store.dispatch(updateViewportDimensions(newWidth, newHeight));

    expect(store.getActions()).toMatchSnapshot();
  });

  test('getBrowserInfo', () => {
    const browserName = 'Firefox';
    const browserVersion = '63.0';
    const fullBrowserVersion = '63.0.1';

    store.dispatch(getBrowserInfo(browserName, browserVersion, fullBrowserVersion));

    expect(store.getActions()).toMatchSnapshot();
  });

  test('getEngineInfo', () => {
    const engineName = 'Gecko';
    const engineVersion = '1.8.1';

    store.dispatch(getEngineInfo(engineName, engineVersion));

    expect(store.getActions()).toMatchSnapshot();
  });

  test('getMobileInfo', () => {
    const mobileVendor = 'Apple';
    const mobileModel = 'iPhone 6s Plus';

    store.dispatch(getMobileInfo(mobileVendor, mobileModel));

    expect(store.getActions()).toMatchSnapshot();
  });

  test('getOSInfo', () => {
    const OSName = 'Windows';
    const OSVersion = '8.1';

    store.dispatch(getOSInfo(OSName, OSVersion));

    expect(store.getActions()).toMatchSnapshot();
  });
});
