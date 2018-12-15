import {
  UPDATE_VIEWPORT_DIMENSIONS,
  GET_BROWSER_INFO,
  GET_ENGINE_INFO,
  GET_MOBILE_INFO,
  GET_OS_INFO,
} from './rootTypes';

export const updateViewportDimensions = (newWidth, newHeight) => ({
    type: UPDATE_VIEWPORT_DIMENSIONS,
    newWidth,
    newHeight,
  }),
  getBrowserInfo = (browserName, broswerVersion, fullBrowserVersion) => ({
    type: GET_BROWSER_INFO,
    browserName,
    broswerVersion,
    fullBrowserVersion,
  }),
  getEngineInfo = (engineName, engineVersion) => ({
    type: GET_ENGINE_INFO,
    engineName,
    engineVersion,
  }),
  getMobileInfo = (mobileVendor, mobileModel) => ({
    type: GET_MOBILE_INFO,
    mobileVendor,
    mobileModel,
  }),
  getOSInfo = (OSName, OSVersion) => ({
    type: GET_OS_INFO,
    OSName,
    OSVersion,
  });
