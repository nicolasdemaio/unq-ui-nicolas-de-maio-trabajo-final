import './GameScreen.css'
import countries from "../../assets/countries";
import {useEffect, useState} from "react";
import Board from "../molecules/Board";

const GameScreen = () => {

    const [countriesCards, setCountriesCards] = useState([])

    useEffect(() => {
        const randomizedCountries = randomizeArray(countries.concat(countries))
        setCountriesCards(randomizedCountries)
        console.log(randomizedCountries)
    }, [])

    const randomizeArray = anArray => {
        for (let i = anArray.length - 1; i > 0; i--) {
            const j = Math.floor((i + 1) * Math.random());
            [anArray[i], anArray[j]] = [anArray[j], anArray[i]];
        }
        return anArray;
    }

    return (
        <div>
            <h1>Game in course</h1>
            <h2>Discover all equals pairs to win.</h2>
            <Board countriesCards={countriesCards}/>
        </div>

    )
}

export default GameScreen