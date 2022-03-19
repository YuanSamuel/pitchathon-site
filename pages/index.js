import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import Landing from '../components/landing'
import About from '../components/about'
import FAQs from '../components/faqs'
import Sponsors from '../components/sponsors'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSB Pitchathon</title>
        <meta name="description" content="Sign up for the CSB Pitchathon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex-col">
        <Landing />
        <About />
        <FAQs />
        <Sponsors />
      </main>
    </div>
  )
}
