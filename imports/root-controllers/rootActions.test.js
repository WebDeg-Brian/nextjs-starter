import configureStore from 'redux-mock-store';
import {
  updateViewportDimensions,
  getBrowserInfo,
  getEngineInfo,
  getMobileInfo,
  getOSInfo,
} from './rootActions';
import createActionTest from '../../tests/utils/createActionTest';

const store = configureStore()();
const actionTest = createActionTest(store);

describe('Check if actions return correct payloads', () => {
  beforeEach(() => {
    store.clearActions();
  });

  actionTest('updateViewportDimensions', updateViewportDimensions, [1024, 512]);
  actionTest('getBrowserInfo', getBrowserInfo, ['Firefox', '63.0', '63.0.1']);
  actionTest('getEngineInfo', getEngineInfo, ['Gecko', '1.8.1']);
  actionTest('getMobileInfo', getMobileInfo, ['Apple', 'iPhone 6s Plus']);
  actionTest('getOSInfo', getOSInfo, ['Windows', '8.1']);
});
