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
import { actions } from '../root-controllers';
import { connect } from 'react-redux';
import getDisplayName from './getDisplayName';

export default Page => {
  class withInitialState extends Component {
    static async getInitialProps(pageContext) {
      let pageProps = {};

      if (typeof Page.getInitialProps === 'function') {
        pageProps = await Page.getInitialProps(pageContext);
      }

      return {
        ...pageProps,
      };
    }

    componentDidMount() {
      this.props.getBrowserInfo(browserName, browserVersion, fullBrowserVersion);
      this.props.getEngineInfo(engineName, engineVersion);
      this.props.getMobileInfo(mobileVendor, mobileModel);
      this.props.getOSInfo(OSName, OSVersion);
    }

    render() {
      return <Page {...this.props} />;
    }
  }

  withInitialState.propTypes = {
    getBrowserInfo: PropTypes.func.isRequired,
    getEngineInfo: PropTypes.func.isRequired,
    getMobileInfo: PropTypes.func.isRequired,
    getOSInfo: PropTypes.func.isRequired,
  };

  withInitialState.displayName = getDisplayName('withInitialState', Page);

  return connect(
    null,
    actions,
  )(withInitialState);
};
