import './GameScreen.css'
import countries from "./assets/countries";
import {useEffect, Fragment, useState} from "react";
import CountryCard from "./CountryCard";
import Board from "./components/Board/Board";

const GameScreen = () => {

    const [randomizedBlocks, setRandomizedBlocks] = useState([])

    useEffect( () => {
        const randomizedCountries = randomizeBlocks(countries.concat(countries));
        setRandomizedBlocks(randomizedCountries.map( (country, i) => ({ index: i, country, flipped: false}) ));
    }, []);

    const randomizeBlocks = blocksArray => {
        for (let i = blocksArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [blocksArray[i], blocksArray[j]] = [blocksArray[j], blocksArray[i]];
        }
        return blocksArray;
    }

 return(
     <Board blocks={randomizedBlocks} />
 )
}

export default GameScreen