import './GameScreen.css'
import gameCountries from "../../assets/countries";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Board from "../molecules/Board";

const GameScreen = () => {
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])

    const randomizeArray = anArray => {
        for (let i = anArray.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1) * Math.random());
            [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
        }
        return anArray
    }
    useEffect(() => {
        setCountries(randomizeArray(gameCountries.concat(gameCountries)))
    }, [])

    const [selectedCard, setSelectedCard] = useState({})
    const [cardsToReset, setCardsToReset] = useState([])
    const [points, setPoints] = useState(0)
    const [disableCards, setDisableCards] = useState(false)

    const checkIfIsWinner = () => (points === (gameCountries.length - 1)) ? navigate('/done') : null

    const resetCards = () => {
        setSelectedCard({})
        setDisableCards(false)
    }

    const checkIfMatch = (name, number) => {
        setDisableCards(true)
        if (selectedCard.name === name) {
            setPoints(points + 1)
            checkIfIsWinner()
            resetCards()
        } else {
            setTimeout(() => {
                setCardsToReset([selectedCard.number, number])
                resetCards()
            }, 1000)
        }
    }

    const handleChoice = (name, number) => {
        selectedCard.name ? checkIfMatch(name, number) : setSelectedCard({name, number})
    }

    return (
        <div className='gamescreen-container'>
            <p className='gamescreen-title'>Tablero en juego</p>
            <Board cards={countries} handleChoice={handleChoice} cardsToReset={cardsToReset}
                   disable={disableCards}/>
            <p className='game-footer'>Puntos sumados: {points}</p>
        </div>
    )
}
export default GameScreen