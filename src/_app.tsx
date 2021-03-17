import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'src/shared/theme';

const WebApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default WebApp;
