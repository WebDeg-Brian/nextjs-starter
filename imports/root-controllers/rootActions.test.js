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

describe('Check if actions return correct payloads', () => {
  beforeEach(() => {
    store.clearActions();
  });

  createActionTest(store, 'updateViewportDimensions', updateViewportDimensions, [1024, 512]);
  createActionTest(store, 'getBrowserInfo', getBrowserInfo, ['Firefox', '63.0', '63.0.1']);
  createActionTest(store, 'getEngineInfo', getEngineInfo, ['Gecko', '1.8.1']);
  createActionTest(store, 'getMobileInfo', getMobileInfo, ['Apple', 'iPhone 6s Plus']);
  createActionTest(store, 'getOSInfo', getOSInfo, ['Windows', '8.1']);
});
