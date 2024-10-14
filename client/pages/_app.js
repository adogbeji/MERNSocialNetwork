import Nav from '../components/Nav';
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/styles.css"/>
      </Head>

      <Nav/>
      <Component {...pageProps} />
    </>
  )
}