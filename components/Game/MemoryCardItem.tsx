import {MemoryCard} from "./useMemoryGameController";
import Image from 'next/image'
import {Button, GridItem} from "@chakra-ui/react";

export interface MemoryCardItemProps {
    card: MemoryCard
    selected: boolean
    onSelected: () => void
}

const MemoryCardItem = ({ card, selected, onSelected}: MemoryCardItemProps) => {

    const src = `/static/coins/${card.image}.svg`

    return (
        <GridItem onClick={onSelected} style={{width: "6em", height: "6em"}}>
            <Image src={src} width="20" height="20" layout={"responsive"} />
        </GridItem>
    )
}

export default MemoryCardItem
