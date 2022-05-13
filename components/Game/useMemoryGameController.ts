import {useEffect, useState} from "react";
import {shuffle} from "lodash"


export type MemoryGameControllerConfig = {
    // Must be an even number
    boardSize: number|[number, number]
}

export type UseMemoryGameController = {
    cards: MemoryCard[],
    selectedCards: number[],
    handleSelected: (index: number) => void,
    handleReset: () => void
}

export type MemoryCard = {
    image: string
    matched: boolean
}

const coinImages = [
    "ada",
    "atom",
    "avax",
    "ftt",
    "bnb",
    "btc",
    "cro",
    "doge",
    "dot",
    "eth",
    "ltc",
    "luna",
    "matic",
    "shib",
    "sol",
    "uni",
    "usdc",
    "usdt",
    "xrp"
]

const useMemoryGameController = ({  }: MemoryGameControllerConfig): UseMemoryGameController => {

    const [cards, setCards] = useState<MemoryCard[]>([])

    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        initializeGame()
    }, [ ])

    const initializeGame = () => {
        // Perform logic initializing the game board
        const cardCount = 6 * 6;
        const imageCount = cardCount / 2

        let cardStack: MemoryCard[] = []

        for (let i = 0; i < imageCount; i++) {
            const image = coinImages[i]
            cardStack.push({ image, matched: false })
            cardStack.push({ image, matched: false })
        }

        // Create cards and shuffle
        cardStack = shuffle(cardStack)

        setCards(cardStack)
        setSelectedCards([])
    }

    const handleSelected = (index: number) => {

    }

    const handleReset = () => {

    }

    const handleWin = () => {

    }

    const handleLose = () => {

    }

    return {
        cards,
        selectedCards,
        handleSelected,
        handleReset
    }
}

export default useMemoryGameController
