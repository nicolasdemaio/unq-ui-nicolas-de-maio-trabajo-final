import './GameScreen.css'
import gameCountries from "../../assets/countries";
import {useEffect, useState} from "react";
import CountryCard from "../atoms/CountryCard";

const GameScreen = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const randomizedCountries = randomizeArray(gameCountries.concat(gameCountries))
        setCountries(randomizedCountries)
    }, [])

    const randomizeArray = anArray => {
        for (let i = anArray.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1) * Math.random());
            [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
        }
        return anArray;
    }

    const [cardA, setCardA] = useState({})
    const [cardB, setCardB] = useState({})

    const checkIfMatchTheSelectedCountries = () => {
        if (cardA.number == cardB.name) {

        } else {
            resetSelectedCards()
        }
    }

    const resetSelectedCards = () => {

    }

    const seeCard = (name, index) => {
        if (cardA.name === name && cardA.index === index) return 0 // To exit, do nothing.
        if (!cardA.name) {
            setCardA({name, index})
        } else if (!cardB.name) {
            setCardB({name, index})
            setTimeout(() =>
                checkIfMatchTheSelectedCountries(), 1000
            )

        }
    }

    return (
        <div className='gamescreen-container'>
            <h1>Game in course</h1>
            <h2>Discover all equals pairs to win.</h2>
            <div className='cards-container'>
                {countries.map((country, i) => (
                    <CountryCard
                        name={country.name}
                        number={i}
                        image={country.imageSrc}
                        seeCard={seeCard}
                        discovered={false}
                    />
                ))}
            </div>

            <p>{cardA.name}</p>
            <p>{cardB.name}</p>

        </div>

    )
}

export default GameScreen