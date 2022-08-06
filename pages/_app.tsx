import '../styles/globals.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from './partials/Layout';

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
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta property='og:url' content='https://arj-portfolio-v2.vercel.app' />
        <meta property='og:type' content='website' />;
        <meta property='og:site_name' content='ARJs Portfolio' />
        <meta property='og:title' content='ARJs Portfolio' />
        <meta itemProp='name' content='ARJs Portfolio' />
        <meta name='author' content='ARJs Joshi' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='en-us' />
        <meta charSet='utf-8' />
        <meta
          itemProp='image'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot-2022-08-03-134638_DrR3x5ppE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659534452367'
        />
        <meta
          property='og:image'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot-2022-08-03-134638_DrR3x5ppE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659534452367'
        />
        <meta
          property='og:image:url'
          content='https://ik.imagekit.io/36athv2v82c8/Screenshot-2022-08-03-134638_DrR3x5ppE.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659534452367'
        />
         <title>ARJs Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
