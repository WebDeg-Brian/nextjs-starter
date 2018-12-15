import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  browserName,
  browserVersion,
  fullBrowserVersion,
  engineName,
  engineVersion,
  mobileVendor,
  mobileModel,
  osName as OSName,
  osVersion as OSVersion,
} from 'react-device-detect';
import { rootActions } from '../root-controllers';
import { connect } from 'react-redux';

export default Page => {
  class withInitialState extends Component {
    componentDidMount() {
      this.updateViewportDimensions();
      window.addEventListener('resize', this.updateViewportDimensions, false);

      this.props.getBrowserInfo(browserName, browserVersion, fullBrowserVersion);
      this.props.getEngineInfo(engineName, engineVersion);
      this.props.getMobileInfo(mobileVendor, mobileModel);
      this.props.getOSInfo(OSName, OSVersion);
    }

    updateViewportDimensions = () => {
      const newWidth = document.documentElement.clientWidth,
        newHeight = document.documentElement.clientHeight;

      this.props.updateViewportDimensions(newWidth, newHeight);
    };

    render() {
      return <Page />;
    }
  }

  withInitialState.propTypes = {
    getBrowserInfo: PropTypes.func.isRequired,
    getEngineInfo: PropTypes.func.isRequired,
    getMobileInfo: PropTypes.func.isRequired,
    getOSInfo: PropTypes.func.isRequired,
    updateViewportDimensions: PropTypes.func.isRequired,
  };

  return connect(
    null,
    rootActions,
  )(withInitialState);
};
