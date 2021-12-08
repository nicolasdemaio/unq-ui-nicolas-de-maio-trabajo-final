import './CountryCard.css'
import {useEffect, useState} from 'react'
import notDiscoveredImage from './not_discovered_country.png'

const CountryCard = ({name, number, image, handleChoice, cardsToReset, disable}) => {

    const [isSelected, setIsSelected] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsDisabled(disable)
    }, [disable])

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
        <div className='card' onClick={handleClick}>
            <img className='bottom' src={image} alt={name}/>
            <img className={isSelected ? 'top' : 'not-discovered'} src={notDiscoveredImage} alt='not-discovered'/>
        </div>
    )
}

export default CountryCard
