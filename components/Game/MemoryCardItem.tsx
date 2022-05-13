import {MemoryCard} from "./useMemoryGameController";
import Image from 'next/image'
import {Button, GridItem} from "@chakra-ui/react";
import {useState} from "react";
import styles from "./MemoryCardGame.module.css"

export interface MemoryCardItemProps {
    card: MemoryCard
    selected: boolean
    onSelected: () => void
}

const MemoryCardItem = ({ card, selected, onSelected}: MemoryCardItemProps) => {

    const src = `/static/coins/${card.image}.svg`
    const [coverSrc, setCoverSrc] = useState("/static/elons-face.jpg")

    return (
        <GridItem
            onMouseOver={() => setCoverSrc("/static/elons-face-hover.jpg")}
            onMouseOut={() => setCoverSrc("/static/elons-face.jpg")}
            onClick={onSelected}
            style={{width: "10em", height: "10em", backgroundColor: "#ccc"}}
        >
            {(selected || card.matched) ?
                <Image src={src} width="20" height="20" layout={"responsive"} />
                :
                <Image src={coverSrc} className={styles.cardBack} width="600" height="600" layout={"responsive"} />
            }

        </GridItem>
    )
}

export default MemoryCardItem
