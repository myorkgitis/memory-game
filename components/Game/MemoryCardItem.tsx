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

    const handleClick = () => {
        // Only fire the on selected event if the card is not currently selected
        // or matched
        if (!card.matched && !selected) {
            onSelected()
        }
    }

    return (
        <GridItem
            onMouseOver={() => setCoverSrc("/static/elons-face-hover.jpg")}
            onMouseOut={() => setCoverSrc("/static/elons-face.jpg")}
            onClick={handleClick}
            style={{width: "10em", height: "10em", backgroundColor: selected ? "lightcyan" : "#ccc"}}
        >
            {(selected || card.matched) ?
                <div className={styles.cardFront}>
                    <Image src={src} width="20" height="20" layout={"responsive"} />
                </div>
                :
                <div className={styles.cardBack}>
                    <Image src={coverSrc}  width="600" height="600" layout={"responsive"} />
                </div>
            }

        </GridItem>
    )
}

export default MemoryCardItem
