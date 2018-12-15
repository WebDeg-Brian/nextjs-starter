import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import withRedux from '../imports/utils/withRedux';
import getPageContext from '../imports/utils/getPageContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default withRedux(
  class SiteApp extends App {
    pageContext = getPageContext();

    componentDidMount() {
      const jssStyles = document.querySelector('#Mui-SSR');

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
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
);
