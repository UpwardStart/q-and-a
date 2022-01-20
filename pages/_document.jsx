import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(context){
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
       <Head />
       <body>
        <Main />
        <NextScript />
        <script src="//code.tidio.co/pfg3qwadejszpj3youcey4ck8hmawhxf.js" async></script>
       </body>
      </Html>
    )
  }
}

export default MyDocument
