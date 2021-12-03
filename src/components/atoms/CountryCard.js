import './CountryCard.css'
import {useEffect, useState} from 'react'
import notDiscoveredImage from './not_discovered_country.png'

const CountryCard = ({name, number, image, handleChoice, cardsToReset, disableCards}) => {

    const [isSelected, setIsSelected] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsDisabled(disableCards)
    }, [disableCards])

    useEffect(() => {
        if (cardsToReset.includes(number)) setIsSelected(false)
    }, [cardsToReset])

    const handleClick = () => {
        if (!(isDisabled || isSelected)) {
            setIsSelected(true)
            handleChoice(name, number)
        }
    }

    return (
        <div className='country-card ' onClick={handleClick}>
            {isSelected ?
                <img className='country-image' src={image} alt={name}/> :
                <img className='country-image' src={notDiscoveredImage} alt='not-discovered'/>}
        </div>
    )
}

export default CountryCard
