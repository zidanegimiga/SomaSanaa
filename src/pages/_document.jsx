import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="all" />
          <meta name="googlebot" content="index,follow" />
          <meta property="og:type" content="website" key="og-type" />
          <meta
            property="og:url"
            content="https://somasanaa.com"
            key="og-url"
          />
          <meta
            property="og:title"
            content="SomaSanaa"
            key="og-title"
          />
          <meta
            property="og:description"
            content="Somasanaa is a platform that allows creatives to access digital masterclasses and uskill themselves"
            key="og-description"
          />
          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
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