import '../styles/globals.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

/**
 * This is the Home Page
 * @return {JSX.Element}: The JSX Code for Home Page
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta property='og:url' content='https://www.atharvaj.online' />
        <meta property='og:type' content='website' />;
        <meta property='og:site_name' content='ARJs Portfolio V2' />
        <meta property='og:title' content='ARJs Portfolio V2' />
        <meta itemProp='name' content='ARJs Portfolio V2' />
        <meta name='author' content='Atharva Joshi' />
        <meta name='language' content='en-us' />
        <meta name='description' content='ARJs Portfolio Website Version 2' />
        <meta name='theme-color' content='#3399FF' />
        <meta charSet='utf-8' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='ARJs Portfolio V2' />
        <meta name='mobile-web-app-capable' content='yes' />
        {/*  */}
        <meta name='twitter:card' content='ARJs Portfolio Website Version 2' />
        <meta name='twitter:url' content='https://www.atharvaj.online' />
        <meta name='twitter:title' content='ARJs Portfolio V2' />
        <meta
          name='twitter:description'
          content='ARJs Portfolio Website Version 2'
        />
        <meta name='twitter:image' content='' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta
          itemProp='image'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot%202023-12-01%20121203_IF5M0eX-SJ.png?updatedAt=1701412990327'
        />
        <meta
          property='og:image'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot%202023-12-01%20121203_IF5M0eX-SJ.png?updatedAt=1701412990327'
        />
        <meta
          property='og:image:url'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot%202023-12-01%20121203_IF5M0eX-SJ.png?updatedAt=1701412990327'
        />
        <title>ARJs Portfolio V2</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
