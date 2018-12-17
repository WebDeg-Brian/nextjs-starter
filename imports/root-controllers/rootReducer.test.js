import rootReducer from './rootReducer';
import {
  UPDATE_VIEWPORT_DIMENSIONS,
  GET_BROWSER_INFO,
  GET_ENGINE_INFO,
  GET_MOBILE_INFO,
  GET_OS_INFO,
} from './rootTypes';
import createReducerTest from '../../tests/utils/createReducerTest';

describe('Check if the state is mutated correctly', () => {
  createReducerTest(rootReducer, 'Initial state', { type: 'UNRECOGNISED_TYPE' });
  createReducerTest(rootReducer, UPDATE_VIEWPORT_DIMENSIONS, {
    type: UPDATE_VIEWPORT_DIMENSIONS,
    newWidth: 1024,
    newHeight: 512,
  });
  createReducerTest(rootReducer, GET_BROWSER_INFO, {
    type: GET_BROWSER_INFO,
    browserName: 'Firefox',
    browserVersion: '63.0',
    fullBrowserVersion: '63.0.1',
  });
  createReducerTest(rootReducer, GET_ENGINE_INFO, {
    type: GET_ENGINE_INFO,
    engineName: 'Gecko',
    engineVersion: '1.8.1',
  });
  createReducerTest(rootReducer, GET_MOBILE_INFO, {
    type: GET_MOBILE_INFO,
    mobileVendor: 'Apple',
    mobileModel: 'iPhone 6s Plus',
  });
  createReducerTest(rootReducer, GET_OS_INFO, {
    type: GET_OS_INFO,
    OSName: 'Windows',
    OSVersion: '8.1',
  });
});
