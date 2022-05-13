import useMemoryGameController from "./useMemoryGameController";
import MemoryCardItem from "./MemoryCardItem";
import {Button, Grid, Heading} from "@chakra-ui/react";

export interface MemoryGameBoardProps {
}

const MemoryGameBoard = (props: MemoryGameBoardProps) => {

    const {cards, selectedCards, handleSelected, handleReset, gameWon} = useMemoryGameController({ boardSize: 6 })

    const [selectionOne, selectionTwo] = selectedCards

    return (
        <div style={{marginTop: "6em", width: "60em", marginLeft: "auto", marginRight: "auto"}}>
            <div style={{minHeight: "10em"}}>
                {gameWon ?
                    <>
                        <Heading as='h2' size='xl' marginBottom={"0.5em"}>Elon says:<br/>DOGE to the MOON! 🚀</Heading>

                        <Button colorScheme='green' size={"lg"} onClick={() => handleReset()}>
                            You've won! Play again?
                        </Button>
                    </>
                    :
                    <Heading as='h2' size='lg'>
                        Elon says:<br/>Do you have diamond hands? 💎🤲<br/>Flip some coins and see!
                    </Heading>
                }
            </div>
            <div>
                <Grid templateColumns={"repeat(6, 1fr)"} gap={2}>
                    {cards.map((card, i) => {
                        return <MemoryCardItem key={i} card={card} selected={i === selectionOne || i === selectionTwo} onSelected={() => handleSelected(i)} />
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default MemoryGameBoard
