import './GameScreen.css'
import gameCountries from "../../assets/countries";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Board from "../molecules/Board";

const GameScreen = () => {
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])

    const {state} = useLocation()
    const {uniqueCards} = state
    const boardSize = (uniqueCards === 8) ? '4x4' : (uniqueCards === 18) ? '6x6' : ''

    const randomizeArray = anArray => {
        for (let i = anArray.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1) * Math.random());
            [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
        }
        return anArray
    }
    useEffect(() => {
        const countriesToRandomize = gameCountries.slice(0, uniqueCards)
        setCountries(randomizeArray(countriesToRandomize.concat(countriesToRandomize)))
    }, [])

    const [selectedCard, setSelectedCard] = useState({})
    const [cardsToReset, setCardsToReset] = useState([])
    const [points, setPoints] = useState(0)
    const [disableCards, setDisableCards] = useState(false)

    const checkIfIsWinner = () => (points === (uniqueCards - 1)) ? navigate('/done') : null

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
            <p className='gamescreen-title'>Tablero en juego ({boardSize})</p>
            <Board cards={countries} handleChoice={handleChoice} cardsToReset={cardsToReset}
                   disable={disableCards} amountOfUniqueCards={uniqueCards}/>
            <p className='game-footer'>Puntos sumados: {points}</p>
        </div>
    )
}
export default GameScreen