import './GameScreen.css'
import gameCountries from "../../assets/countries";
import {useEffect, useState} from "react";
import CountryCard from "../atoms/CountryCard";
import {useNavigate} from "react-router-dom";

const GameScreen = () => {
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])

    const randomizeArray = anArray => {
        for (let i = anArray.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1) * Math.random());
            [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
        }
        return anArray;
    }
    useEffect(() => {
        const randomizedCountries = randomizeArray(gameCountries.concat(gameCountries))
        setCountries(randomizedCountries)
    }, [])

    const [selectedCard, setSelectedCard] = useState({})
    const [cardsToReset, setCardsToReset] = useState([])
    const [matchedCards, setMatchedCards] = useState([])

    const checkIfIsWinner = () => (matchedCards.length === (gameCountries.length - 1)) ? navigate('/done') : null

    const handleCardClick = (name, number) => {
        if (!selectedCard.name) {
            setSelectedCard({name, number})
        } else if (selectedCard.name === name) {
            setCardsToReset([selectedCard.number, number])
            setSelectedCard({})
            setMatchedCards(matchedCards.concat(name))
            checkIfIsWinner()
        } else {
            setTimeout(() => {
                setCardsToReset([selectedCard.number, number])
                setSelectedCard({})
            }, 1000)
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
                        handleCardClick={handleCardClick}
                        cardsToReset={cardsToReset}
                        matchedCards={matchedCards}
                    />
                ))}
            </div>

            <p>Reimaining cards: {gameCountries.length - matchedCards.length}</p>

        </div>

    )
}
export default GameScreen