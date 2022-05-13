import {MemoryCard} from "./useMemoryGameController";
import Image from 'next/image'

export interface MemoryCardItemProps {
    card: MemoryCard
    selected: boolean
    onSelected: () => void
}

const MemoryCardItem = ({ card, selected, onSelected}: MemoryCardItemProps) => {

    const src = `/static/coins/${card.image}.svg`

    return (
        <div>
            <Image src={src} width="20" height="20" layout={"responsive"} />
        </div>
    )
}

export default MemoryCardItem
