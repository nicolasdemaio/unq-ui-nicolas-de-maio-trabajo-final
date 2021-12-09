import './GameScreen.css'
import gameCountries from "../../assets/countries";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Board from "../molecules/Board";
import {Button} from 'react-bootstrap'
import WinnerModal from "../atoms/WinnerModal";

const GameScreen = () => {

    const amountOfCards = (amount) => amount ? amount : {uniqueCards : 8}
    const {uniqueCards} = amountOfCards(useLocation().state)

    const [countries, setCountries] = useState([])

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
    const [isWinner, setIsWinner] = useState(false)

    const checkIfIsWinner = () => (points === (uniqueCards - 1)) ? setIsWinner(true) : null

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

    const handleChoice = (name, number) => selectedCard.name ? checkIfMatch(name, number) : setSelectedCard({name, number})

    const resetGame = () => {
        resetCards()
        setPoints(0)
        setIsWinner(false)
        setCardsToReset(Array(uniqueCards * 2 + 1).fill().map((_, idx) => idx))
    }

    return (
        <div className='gamescreen-container'>
            <WinnerModal resetGame={resetGame} isWinner={isWinner}/>
            <p className='gamescreen-title'>Tablero en juego</p>
            <Board cards={countries} handleChoice={handleChoice} cardsToReset={cardsToReset} disable={disableCards} amountOfUniqueCards={uniqueCards}/>
            <div className='game-footer'>
                <p className='game-footer-points'>Puntos sumados: {points}</p>
                {isWinner ? <Button className='button-playagain' variant="primary" onClick={resetGame}>
                    Jugar de nuevo
                </Button> : null}
            </div>
        </div>
    )
}
export default GameScreen