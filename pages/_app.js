import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { I18nextProvider } from 'react-i18next';

import Fonts from './_fonts';
import './_globalStyle';
import initialI18nInstance from '../i18n';
import createStore from '../configureStore';

class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    Fonts();
  }

  render() {
    const {
      Component, pageProps, store, router,
    } = this.props;
    const {
      i18n, initialI18nStore, initialLanguage,
    } = pageProps || {};

    if (router.query.lng) {
      initialI18nInstance.changeLanguage(router.query.lng);
    }

    return (
      <Container>
        <Provider store={store}>
          <I18nextProvider
            i18n={i18n || initialI18nInstance}
            initialI18nStore={initialI18nStore}
            initialLanguage={initialLanguage}
          >
            <Component {...pageProps} />
          </I18nextProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MainApp));
