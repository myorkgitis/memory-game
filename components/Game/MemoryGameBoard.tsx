import useMemoryGameController from "./useMemoryGameController";
import MemoryCardItem from "./MemoryCardItem";
import {Grid, Heading} from "@chakra-ui/react";

export interface MemoryGameBoardProps {
}

const MemoryGameBoard = (props: MemoryGameBoardProps) => {

    const {cards, selectedCards, handleSelected, handleReset} = useMemoryGameController({ boardSize: 6 })

    const [selectionOne, selectionTwo] = selectedCards

    return (
        <div style={{marginTop: "6em", width: "36em", marginLeft: "auto", marginRight: "auto"}}>
            <Heading as='h2' size='2xl'>
                Wanna flip some coins?!
            </Heading>
            <Grid templateColumns={"repeat(6, 1fr)"} gap={6}>
                {cards.map((card, i) => {
                    return <MemoryCardItem key={i} card={card} selected={i === selectionOne || i === selectionTwo} onSelected={() => handleSelected(i)} />
                })}
            </Grid>
        </div>
    )
}

export default MemoryGameBoard
