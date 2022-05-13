import type { NextPage } from 'next'
import Head from 'next/head'
import MemoryGameBoard from "../components/Game/MemoryGameBoard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memory Game - Let&apos;s play!</title>
      </Head>
      <MemoryGameBoard />
    </div>
  )
}

export default Home
