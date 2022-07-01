import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instituto Cris Monteiro</title>
    
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
