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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
