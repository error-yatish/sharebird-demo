import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Component {...pageProps} />
  </>
)

export default MyApp
