import './CountryCard.css'
import {useEffect, useState} from 'react'
import notDiscoveredImage from './not_discovered_country.png'

const CountryCard = ({name, number, image, handleChoice, cardsToReset, matchedCards, disableCards}) => {

    const [isSelected, setIsSelected] = useState(false)
    const [isMatched, setIsMatched] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsDisabled(disableCards)
    }, [disableCards])

    useEffect(() => {
        if (!isMatched) {
            setIsMatched(matchedCards.includes(name))
            if (cardsToReset.includes(number)) setIsSelected(false)
        }
    }, [cardsToReset, matchedCards])

    const handleClick = () => {
        if (!(isDisabled || isMatched || isSelected)) {
            setIsSelected(true)
            handleChoice(name, number)
        }
    }

    return (
        <div className='country-card ' onClick={handleClick}>
            {(isMatched || isSelected) ?
                <img className='country-image' src={image} alt={name}/> :
                <img className='country-image' src={notDiscoveredImage} alt='not-discovered'/>}
        </div>
    )
}

export default CountryCard
