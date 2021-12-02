import './CountryCard.css'
import {useEffect, useState} from 'react'
import notDiscoveredImage from './not_discovered_country.png'

const CountryCard = ({name, number, image, handleCardClick, cardsToReset, matchedCards}) => {

    const [isSelected, setIsSelected] = useState(false)
    const [isMatched, setIsMatched] = useState(false)

    useEffect(() => {
            if (cardsToReset.includes(number)) setIsSelected(false)
            if (matchedCards.includes(name)) setIsMatched(true)
        }
        , [cardsToReset, matchedCards])

    const handleClick = () => {
        if (isMatched || isSelected) {
            // do nothing
        } else {
            setIsSelected(true)
            handleCardClick(name, number)
        }
    }

    return (
        <div className='country-card' onClick={handleClick}>
            {(isMatched || isSelected) ?
                <img className='country-image' src={image} alt={name}/> :
                <img className='country-image' src={notDiscoveredImage} alt='not-discovered'/>}

        </div>
    )
}

export default CountryCard
