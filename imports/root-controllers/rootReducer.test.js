import rootReducer from './rootReducer';
import {
  updateViewportDimensions,
  getBrowserInfo,
  getEngineInfo,
  getMobileInfo,
  getOSInfo,
} from './rootActions';

describe('Check if the state is mutated correctly', () => {
  test('Initial state', () => {
    const action = {
      type: 'UNRECOGNISED_ACTION',
    };

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  test('updateViewportDimensions', () => {
    const newWidth = 1024;
    const newHeight = 512;
    const action = updateViewportDimensions(newWidth, newHeight);

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  test('getBrowserInfo', () => {
    const browserName = 'Firefox';
    const browserVersion = '63.0';
    const fullBrowserVersion = '63.0.1';
    const action = getBrowserInfo(browserName, browserVersion, fullBrowserVersion);

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  test('getEngineInfo', () => {
    const engineName = 'Gecko';
    const engineVersion = '1.8.1';
    const action = getEngineInfo(engineName, engineVersion);

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  test('getMobileInfo', () => {
    const mobileVendor = 'Apple';
    const mobileModel = 'iPhone 6s Plus';
    const action = getMobileInfo(mobileVendor, mobileModel);

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });

  test('getOSInfo', () => {
    const OSName = 'Windows';
    const OSVersion = '8.1';
    const action = getOSInfo(OSName, OSVersion);

    expect(rootReducer(undefined, action)).toMatchSnapshot();
  });
});
