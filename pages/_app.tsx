import '../styles/globals.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

/**
 * This is the Home Page
 * @return {JSX.Element}: The JSX Code for Home Page
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
