import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ritesh's Portfolio</title>
        <meta name="description" content="Personal portfolio website built with Next.js and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  )
}
