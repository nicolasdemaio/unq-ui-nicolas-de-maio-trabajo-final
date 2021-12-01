import './CountryCard.css'
import notDiscoveredImage from './not_discovered_country.png'
import {useState} from "react";

const CountryCard = ({name, number, image, showCard, hideCard, initialDiscovered}) => {

    const [discovered, setDiscovered] = useState(initialDiscovered)

    const handleClick = () => {
        const returnedNumber = showCard(name, number)
        if (returnedNumber != 0) {
            setDiscovered(true)
        }

    }

    return (
        <div className='country-card' onClick={handleClick}>
            {discovered ?
                <img className='country-image' src={image}/> :
                <img className='country-image' src={notDiscoveredImage}/>
            }
        </div>
    )
}

export default CountryCard
