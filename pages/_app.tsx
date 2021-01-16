import React, { FC } from 'react';
import { AppProps } from 'next/app';
import withReduxSaga from 'next-redux-saga';
import { wrapper } from '../createStore';
import { WithSagaTaskStore } from '../interfaces';
import GlobalStyles from '../../boilerplate/styles/global-styles';
import { ThemeProvider } from '../../boilerplate/styles/themed-components';
import theme from '../../boilerplate/styles/themes';
import { NextPage } from 'next';

const MyApp: FC<AppProps> = ({ Component, pageProps }: any) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);
export default wrapper.withRedux(MyApp);
