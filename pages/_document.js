import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
       <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,700;1,700&family=Bebas+Neue&family=Butterfly+Kids&family=Estonia&family=Exo:ital,wght@0,900;1,900&family=Josefin+Sans:wght@500&family=Lobster&family=Poppins:ital@0;1&family=Raleway:ital,wght@0,700;0,800;0,900;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <script src="https://cdn.tailwindcss.com"></script>
       </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
