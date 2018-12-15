import {
  UPDATE_VIEWPORT_DIMENSIONS,
  GET_BROWSER_INFO,
  GET_ENGINE_INFO,
  GET_MOBILE_INFO,
  GET_OS_INFO,
} from './rootTypes';
import rootInitialState from './rootInitialState';

export default (state = rootInitialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT_DIMENSIONS:
      return {
        ...state,
        viewportWidth: action.newWidth,
        viewportHeight: action.newHeight,
      };
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
