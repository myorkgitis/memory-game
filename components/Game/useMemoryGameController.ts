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
    "algo",
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
    const [matchesRemaining, setMatchesRemaining] = useState<number>(0)

    const [selectedCards, setSelectedCards] = useState<number[]>([])

    useEffect(() => {
        initializeGame()
    }, [ ])

    const initializeGame = () => {
        // Perform logic initializing the game board
        const cardCount = 6 * 6;
        const totalMatches = cardCount / 2

        let cardStack: MemoryCard[] = []

        for (let i = 0; i < totalMatches; i++) {
            const image = coinImages[i]
            cardStack.push({ image, matched: false })
            cardStack.push({ image, matched: false })
        }

        // Create cards and shuffle
        cardStack = shuffle(cardStack)

        setCards(cardStack)
        setMatchesRemaining(totalMatches)
        setSelectedCards([])
    }

    const handleSelected = (index: number) => {
        const selection = [ ...selectedCards, index ]

        if (selection.length === 2) {
            const [one, two] = selection
            if (cards[one].image === cards[two].image) {
                const tempStack = cards.slice()
                tempStack[one].matched = true
                tempStack[two].matched = true

                setCards(prevStack => {
                    prevStack[one].matched = true
                    prevStack[two].matched = true

                    return [ ...prevStack ]
                })
                setMatchesRemaining(prev => {
                    return prev - 1
                })
            }

            setSelectedCards([])
        } else {
            setSelectedCards(selection)
        }
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
