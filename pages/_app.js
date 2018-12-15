import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { JssProvider } from 'react-jss';
import { Provider, connect } from 'react-redux';
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
import NProgress from 'nprogress';
import Router from 'next/router';
import { rootActions } from '../imports/root-controllers';
import withRedux from '../imports/utils/withRedux';
import getPageContext from '../imports/utils/getPageContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default withRedux(
  connect(
    null,
    rootActions,
  )(
    class SiteApp extends App {
      pageContext = getPageContext();

      updateViewportDimensions = () => {
        const newWidth = document.documentElement.clientWidth,
          newHeight = document.documentElement.clientHeight;

        this.props.updateViewportDimensions(newWidth, newHeight);
      };

      componentDidMount() {
        const jssStyles = document.querySelector('#Mui-SSR');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }

        this.updateViewportDimensions();
        window.addEventListener('resize', this.updateViewportDimensions, false);

        this.props.getBrowserInfo(browserName, browserVersion, fullBrowserVersion);
        this.props.getEngineInfo(engineName, engineVersion);
        this.props.getMobileInfo(mobileVendor, mobileModel);
        this.props.getOSInfo(OSName, OSVersion);
      }

      render() {
        const { Component, pageProps, store } = this.props;
        const { theme, sheetsRegistry, sheetsManager, generateClassName } = this.pageContext;

        return (
          <Container>
            <Provider store={store}>
              <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
                <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                  <CssBaseline />
                  <Component pageContext={this.pageContext} {...pageProps} />
                </MuiThemeProvider>
              </JssProvider>
            </Provider>
          </Container>
        );
      }
    },
  ),
);
