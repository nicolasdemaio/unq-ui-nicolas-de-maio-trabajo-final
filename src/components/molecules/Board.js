import './Board.css'
import CountryCard from "../atoms/CountryCard";

const Board = ({countriesCards}) => {
    return (
        <div className='cards-container'>
            {countriesCards.map((countryCard, i) => {
                return <CountryCard key={i} country={countryCard} hide={true}/>
            })}
        </div>
    )
}


export default Board