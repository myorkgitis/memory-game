import useMemoryGameController from "./useMemoryGameController";
import MemoryCardItem from "./MemoryCardItem";
import {Box, Button, Grid, Heading, SimpleGrid, Stat, StatGroup, StatLabel, StatNumber} from "@chakra-ui/react";
import moment from "moment";
import duration from "moment-duration-format"

duration(moment)

export interface MemoryGameBoardProps {
}

const MemoryGameBoard = (props: MemoryGameBoardProps) => {

    const {cards, selectedCards, handleSelected, handleReset, gameWon, elapsedTime, attempts} = useMemoryGameController({ boardSize: 6 })

    const [selectionOne, selectionTwo] = selectedCards

    return (
        <div style={{marginTop: "1em", width: "54em", marginLeft: "auto", marginRight: "auto"}}>
            <div style={{minHeight: "8em"}}>
                <SimpleGrid columns={2} spacing={2}>
                    <Box>
                        {gameWon ?
                            <>
                                <Heading as='h2' size='md' marginBottom={"0.5em"}>Elon says:<br/>DOGE to the MOON! 🚀</Heading>

                                <Button colorScheme='green' size={"lg"} onClick={() => handleReset()}>
                                    You've won! Probably nothing... Play again?
                                </Button>
                            </>
                            :
                            <Heading as='h2' size='md'>
                                Elon says:<br/>Do you have diamond hands? 💎🤲<br/>Let's flip some coins and see! 👀
                            </Heading>
                        }
                    </Box>
                    <Box padding="1em">
                        <StatGroup>
                            <Stat>
                                <StatLabel>Time Elapsed</StatLabel>
                                <StatNumber>{moment.duration(elapsedTime, "seconds").format("hh:mm:ss")}</StatNumber>
                            </Stat>

                            <Stat>
                                <StatLabel>Total Attempts</StatLabel>
                                <StatNumber>{attempts}</StatNumber>
                            </Stat>
                        </StatGroup>
                    </Box>
                </SimpleGrid>

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
