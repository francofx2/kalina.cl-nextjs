import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kalina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Manifesto" />
        <p className="description">
          Descubre <code>kalina.cl</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
