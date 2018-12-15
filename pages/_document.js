import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';

class SiteDocument extends Document {
  static getInitialProps({ renderPage }) {
    let pageContext;
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => {
      const SiteApp = <App {...props} />;

      pageContext = props.pageContext;
      sheet.collectStyles(SiteApp);
      return SiteApp;
    });

    return {
      ...page,
      pageContext,
      styleTag: sheet.getStyleElement(),
      styles: (
        <>
          <style
            id="Mui-SSR"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString(),
            }}
          />
          {flush() || null}
        </>
      ),
    };
  }

  render() {
    const { pageContext, styleTag } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          {styleTag}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default SiteDocument;
