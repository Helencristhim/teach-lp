import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Modules from '../components/Modules'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>TEACH - Transforme a Educação com Inteligência Artificial</title>
        <meta name="description" content="A primeira plataforma de IA para educadores no Brasil. Capacite 2,3 milhões de professores com ferramentas de IA e prepare seus alunos para o futuro." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </>
  )
}
