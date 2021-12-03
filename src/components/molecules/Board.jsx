import CountryCard from "../atoms/CountryCard";
import './Board.css'

const Board = ({cards, handleChoice, cardsToReset, matchedCards, disableCards}) => {
    return (
        <div className='cards-container'>
            {cards.map((card, number) => (
                <CountryCard
                    name={card.name}
                    number={number}
                    image={card.imageSrc}
                    handleChoice={handleChoice}
                    cardsToReset={cardsToReset}
                    matchedCards={matchedCards}
                    disableCards={disableCards}
                />
            ))}
        </div>
    )
}

export default Board