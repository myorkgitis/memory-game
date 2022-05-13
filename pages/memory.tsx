import '../styles/globals.css'
import MemoryGameBoard from "../components/Game/MemoryGameBoard";
import Head from "next/head";

export interface MemoryPageProps {

}

function MemoryPage({ }: MemoryPageProps) {
  return (
      <>
          <Head>
              <title>Memory Game - Let's play!</title>
          </Head>
          <MemoryGameBoard />
      </>
  )
}

export default MemoryPage
