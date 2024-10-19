import Nav from '../components/Nav';
import Head from 'next/head'

import '../styles/styles.scss';  // Imports global SASS styles

export default function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>

        <link rel="stylesheet" href="/css/styles.css"/>
      </Head>

      <Nav/>
      <Component {...pageProps} />
    </>
  )
}