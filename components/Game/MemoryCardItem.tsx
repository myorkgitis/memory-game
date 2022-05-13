import {MemoryCard} from "./useMemoryGameController";
import Image from 'next/image'
import {Button, GridItem} from "@chakra-ui/react";
import {useState} from "react";
import styles from "./MemoryCardGame.module.css"
import { motion } from "framer-motion"

export interface MemoryCardItemProps {
    card: MemoryCard
    selected: boolean
    onSelected: () => void
}

const MemoryCardItem = ({ card, selected, onSelected}: MemoryCardItemProps) => {

    const src = `/static/coins/${card.image}.svg`
    const [coverSrc, setCoverSrc] = useState("/static/elons-face.jpg")

    const isFlipped = (selected || card.matched)

    const handleClick = () => {
        // Only fire the on selected event if the card is not currently selected
        // or matched
        if (!isFlipped) {
            onSelected()
        }
    }

    // TODO optimize flipping animation with onAnimationEnd={} in motion.div to only show the coin after the flip animation is complete

    return (
        <GridItem
            onMouseOver={() => setCoverSrc("/static/elons-face-hover.jpg")}
            onMouseOut={() => setCoverSrc("/static/elons-face.jpg")}
            onClick={handleClick}
            style={{width: "10em", height: "10em", backgroundColor: selected ? "lightcyan" : "#ccc"}}
        >
            <motion.div  className={isFlipped ? styles.cardFront : styles.cardBack} animate={{ rotateY: isFlipped ? 0 : 180, transition: { duration: .2 } }}>
                {isFlipped ?
                    <Image src={src} width="20" height="20" layout={"responsive"} />
                    :
                    <Image src={coverSrc}  width="600" height="600" layout={"responsive"} />
                }
            </motion.div>
        </GridItem>
    )
}

export default MemoryCardItem
