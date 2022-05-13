import {useEffect, useState} from "react";
import {shuffle} from "lodash"
import moment from "moment";


export type MemoryGameControllerConfig = {
    // Must be an even number
    boardSize: number|[number, number]
}

export type UseMemoryGameController = {
    cards: MemoryCard[],
    selectedCards: number[],
    handleSelected: (index: number) => void,
    handleReset: () => void
    gameWon: boolean
    attempts: number
    elapsedTime: number
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
    const [gameWon, setGameWon] = useState(false)
    const [attempts, setAttempts] = useState(0)
    const [startTime, setStartTime] = useState(moment())
    const [elapsedTime, setElapsedTime] = useState(0)

    const [selectedCards, setSelectedCards] = useState<number[]>([])

    useEffect(() => {
        initializeGame()
    }, [])

    useEffect(() => {
        if (!gameWon) {
            const timer = setInterval(() => {
                setElapsedTime(moment().diff(startTime, "seconds"))
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }
    }, [gameWon])

    const initializeGame = () => {
        // Perform logic initializing the game board
        const boardSize = 6
        const cardCount = boardSize * boardSize;
        const totalMatches = cardCount / 2

        let cardStack: MemoryCard[] = []
        // Create a stack of cards, two identical cards for each possible match
        for (let i = 0; i < totalMatches; i++) {
            // the coin image is used to reference an SVG
            const image = coinImages[i]
            // Add cards to the stack
            cardStack.push({ image, matched: false })
            cardStack.push({ image, matched: false })
        }

        // Create cards and shuffle
        cardStack = shuffle(cardStack)

        // Initialize game state
        setCards(cardStack)
        setGameWon(false)
        setMatchesRemaining(totalMatches)
        setSelectedCards([])
        setAttempts(0)
        setStartTime(moment())
        setElapsedTime(0)
    }

    const handleSelected = (index: number) => {
        const selection = [ ...selectedCards, index ]

        // Do nothing if user is trying to select more than 2 cards
        if (selection.length > 2) return

        setSelectedCards(selection)

        // If two cards are selected, compare them
        if (selection.length === 2) {
            setAttempts(prevAttempts => prevAttempts + 1)

            const [one, two] = selection

            // If a match is found, update the selected cards to be matched
            if (cards[one].image === cards[two].image) {
                setCards(prevStack => {
                    prevStack[one].matched = true
                    prevStack[two].matched = true

                    return [ ...prevStack ]
                })
                const tempMatchesRemaining = matchesRemaining - 1

                setMatchesRemaining(tempMatchesRemaining)

                // If no remaining matches, then the game has been won
                if (tempMatchesRemaining === 0) {
                    setGameWon(true)
                }

                // If it's a match, clear the selected cards immediately
                setSelectedCards([])
            } else {
                // If it's not a match, give user a little time to look before flipping back
                setTimeout(() => {
                    setSelectedCards([])
                }, 1500)
            }
        }
    }

    const handleReset = () => {
        initializeGame()
    }

    return {
        cards,
        selectedCards,
        handleSelected,
        handleReset,
        gameWon,
        elapsedTime,
        attempts
    }
}

export default useMemoryGameController
