import Document, { Html, Head, Main, NextScript } from 'next/document';
import 'twin.macro';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body tw="min-h-screen">
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
