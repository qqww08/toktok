import React, { FC } from 'react';
import { AppProps } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '../createStore';
import { WithSagaTaskStore } from '../interfaces';
import GlobalStyles from '../styles/common/global-styles';
import { ThemeProvider } from '../styles/common/themed-components';
import theme from '../styles/common/themes';
import { NextPage } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);
export default wrapper.withRedux(MyApp);
