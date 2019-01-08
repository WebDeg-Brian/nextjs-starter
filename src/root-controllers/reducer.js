import { GET_BROWSER_INFO, GET_ENGINE_INFO, GET_MOBILE_INFO, GET_OS_INFO } from './types';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BROWSER_INFO:
      return {
        ...state,
        browserName: action.browserName,
        browserVersion: action.browserVersion,
        fullBrowserVersion: action.fullBrowserVersion,
      };
    case GET_ENGINE_INFO:
      return {
        ...state,
        engineName: action.engineName,
        engineVersion: action.engineVersion,
      };
    case GET_MOBILE_INFO:
      return {
        ...state,
        mobileVendor: action.mobileVendor,
        mobileModel: action.mobileModel,
      };
    case GET_OS_INFO:
      return {
        ...state,
        OSName: action.OSName,
        OSVersion: action.OSVersion,
      };
    default:
      return state;
  }
};
