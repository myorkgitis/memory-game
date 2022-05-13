import useMemoryGameController from "./useMemoryGameController";
import MemoryCardItem from "./MemoryCardItem";

export interface MemoryGameBoardProps {
}

const MemoryGameBoard = (props: MemoryGameBoardProps) => {

    const {cards, selectedCards, handleSelected, handleReset} = useMemoryGameController({ boardSize: 6 })

    const [selectionOne, selectionTwo] = selectedCards

    return (
        <div>
            {cards.map((card, i) => {
                return <MemoryCardItem key={i} card={card} selected={i === selectionOne || i === selectionTwo} onSelected={() => handleSelected(i)} />
            })}
        </div>
    )
}

export default MemoryGameBoard
