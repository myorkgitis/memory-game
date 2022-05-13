import {useEffect, useState} from "react";


export type MemoryGameControllerConfig = {
    // Must be an even number
    boardSize: number
}

export type UseMemoryGameController = {

}

export type MemoryCard = {
    image: string
    matched: boolean
    selected: boolean
}

const useMemoryGameController = ({ boardSize }: MemoryGameControllerConfig): UseMemoryGameController => {

    const [cards, setCards] = useState([])

    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        // Perform logic initializing the game board
        // Create cards and shuffle
    }, [ boardSize ])

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
