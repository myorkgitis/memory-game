import useMemoryGameController from "./useMemoryGameController";

export interface MemoryGameBoardProps {
}

const MemoryGameBoard = (props: MemoryGameBoardProps) => {

    const game = useMemoryGameController({ boardSize: 6 })

    return (
        <div>
            {game.cards.map((card, i) => {
                return <div key={i}>{card.image}</div>
            })}
        </div>
    )
}

export default MemoryGameBoard
