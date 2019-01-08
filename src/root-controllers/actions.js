import { GET_BROWSER_INFO, GET_ENGINE_INFO, GET_MOBILE_INFO, GET_OS_INFO } from './types';

export const getBrowserInfo = (browserName, browserVersion, fullBrowserVersion) => ({
  type: GET_BROWSER_INFO,
  browserName,
  browserVersion,
  fullBrowserVersion,
});

export const getEngineInfo = (engineName, engineVersion) => ({
  type: GET_ENGINE_INFO,
  engineName,
  engineVersion,
});

export const getMobileInfo = (mobileVendor, mobileModel) => ({
  type: GET_MOBILE_INFO,
  mobileVendor,
  mobileModel,
});
export const getOSInfo = (OSName, OSVersion) => ({
  type: GET_OS_INFO,
  OSName,
  OSVersion,
});
