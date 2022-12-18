import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

/**
 * This is the Document Page
 * @return {JSX.Element}: The JSX Code for Document Page
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icons' href='/icon.png' />
          <link rel='theme-color' href='#fff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
