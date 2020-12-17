import React, { FC } from "react";
import { AppProps } from "next/app";
import { wrapper } from "~/createStore";
import GlobalStyles from "~/styles/global-styles";
import { ThemeProvider } from "~/styles/themed-components";
import theme from "~/styles/themes";

const MyApp: FC<AppProps> = ({ Component, pageProps }: any) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);
export default wrapper.withRedux(MyApp);
