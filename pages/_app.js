import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from 'sections/header'
import Footer from 'sections/footer'
import 'styles/_appDefault.scss'
import 'styles/fontawesome-all.min.css'

function MyApp({ Component, pageProps }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = () => setWidth(window.innerWidth)
    w()
    window.addEventListener('resize', w)
    return () => window.removeEventListener('resize', w)
  }, [width])

  return (
    <>
      <Head>
        <title>The Digital Hammer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header width={width} />
      <div id="page-wrapper">
        <Component {...pageProps} width={width} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp